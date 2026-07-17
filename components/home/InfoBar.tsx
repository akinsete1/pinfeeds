import styles from './InfoBar.module.css';

const items = [
  {
    icon: '🛡️',
    title: 'Trusted Services',
    subtitle: 'We Are Trusted By Our Customers',
    dark: true,
  },
  {
    icon: '🕐',
    title: '24/7 Support',
    subtitle: '+234 806 689 3144',
    dark: false,
  },
  {
    icon: '💼',
    title: 'Expert & Professional',
    subtitle: '8+ Years of Industry Excellence',
    dark: true,
  },
];

export default function InfoBar() {
  return (
    <section className={styles.infoBar} aria-label="Key features">
      <div className={styles.grid}>
        {items.map((item) => (
          <div
            key={item.title}
            className={`${styles.item} ${item.dark ? styles.dark : styles.accent}`}
          >
            <span className={styles.icon} aria-hidden="true">{item.icon}</span>
            <div>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
