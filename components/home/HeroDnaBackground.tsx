'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './HeroDnaBackground.module.css';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  vx: number;
  vy: number;
  colorType: 'cyan' | 'blue' | 'bright';
}

export default function HeroDnaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 1. Mouse Parallax Effect (smooth RAF lerp without React re-renders)
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      targetY = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateParallax = () => {
      // Smooth interpolation (lerp factor: 0.05 for fluid, silky damping)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const rotX = currentY * -6; // degrees
      const rotY = currentX * 8; // degrees
      const transX = currentX * 22; // px
      const transY = currentY * 16; // px

      // Keep translateY(-50%) base alignment while applying 3D parallax
      scene.style.transform = `translateY(-50%) perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`;

      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // 2. Cyan Bokeh & Energy Motes Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animId: number;
    let isVisible = true;

    // Particle count: 38 particles provides rich depth with negligible CPU cost
    const PARTICLE_COUNT = 38;
    const particles: Particle[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const isBokeh = Math.random() < 0.22; // 22% large soft bokeh circles
        const baseRadius = isBokeh ? 6 + Math.random() * 10 : 1.2 + Math.random() * 2.8;
        const colorRand = Math.random();
        const colorType: 'cyan' | 'blue' | 'bright' =
          colorRand < 0.6 ? 'cyan' : colorRand < 0.85 ? 'blue' : 'bright';

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: baseRadius,
          baseRadius,
          alpha: isBokeh ? 0.08 + Math.random() * 0.16 : 0.25 + Math.random() * 0.45,
          baseAlpha: isBokeh ? 0.12 : 0.35,
          pulseSpeed: 0.008 + Math.random() * 0.02,
          pulseOffset: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -(0.18 + Math.random() * 0.42), // Gentle upward drift
          colorType,
        });
      }
    };

    resize();
    createParticles();

    window.addEventListener('resize', resize, { passive: true });

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion
        p.x += p.vx * 60 * dt;
        p.y += p.vy * 60 * dt;

        // Wrap around boundaries
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Pulsing opacity
        const pulse = Math.sin(now * 0.001 * p.pulseSpeed * 60 + p.pulseOffset);
        const currentAlpha = Math.max(0.04, Math.min(1, p.baseAlpha + pulse * 0.15));

        // Draw particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.radius > 5) {
          // Soft bokeh disc with gradient glow
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          if (p.colorType === 'cyan') {
            grad.addColorStop(0, `rgba(0, 220, 255, ${currentAlpha})`);
            grad.addColorStop(0.6, `rgba(0, 149, 235, ${currentAlpha * 0.45})`);
            grad.addColorStop(1, 'rgba(0, 149, 235, 0)');
          } else if (p.colorType === 'blue') {
            grad.addColorStop(0, `rgba(56, 189, 248, ${currentAlpha})`);
            grad.addColorStop(0.7, `rgba(30, 58, 138, ${currentAlpha * 0.3})`);
            grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
          } else {
            grad.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha * 1.2})`);
            grad.addColorStop(0.4, `rgba(0, 220, 255, ${currentAlpha * 0.6})`);
            grad.addColorStop(1, 'rgba(0, 149, 235, 0)');
          }
          ctx.fillStyle = grad;
        } else {
          // Sharp glowing point mote
          if (p.colorType === 'cyan') {
            ctx.fillStyle = `rgba(0, 220, 255, ${currentAlpha})`;
          } else if (p.colorType === 'bright') {
            ctx.fillStyle = `rgba(186, 230, 253, ${currentAlpha})`;
          } else {
            ctx.fillStyle = `rgba(0, 149, 235, ${currentAlpha})`;
          }
        }

        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={containerRef} aria-hidden="true">
      {/* Dynamic ambient particles & bokeh matching image aesthetic */}
      <canvas ref={canvasRef} className={styles.particleCanvas} />

      {/* 3D Scene Container with Parallax & Continuous Float */}
      <div ref={sceneRef} className={styles.dnaScene}>
        <div className={styles.dnaFloatWrapper}>
          {/* Volumetric ambient back-glow behind the helix */}
          <div className={styles.dnaAura} />
          <div className={styles.dnaGlowSpot} />

          {/* DNA Double Helix Image Layer with Screen blend and radial mask */}
          <div className={styles.dnaImageContainer}>
            <Image
              src="/images/hero/dna-helix.png"
              alt="Digital DNA double helix background visualization"
              width={736}
              height={414}
              priority
              quality={90}
              className={styles.dnaImg}
            />
          </div>

          {/* Cyber light energy pulse sweeping along the strands */}
          <div className={styles.energySweep} />
        </div>
      </div>
    </div>
  );
}

