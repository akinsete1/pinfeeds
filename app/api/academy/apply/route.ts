import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

interface ApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  courseTitle: string;
  preferredSchedule?: string;
  studyMode?: string;
  experienceLevel?: string;
  statement?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ApplicationPayload = await req.json();
    const {
      fullName,
      email,
      phone,
      courseId,
      courseTitle,
      preferredSchedule = 'Weekday Intensive',
      studyMode = 'Hybrid',
      experienceLevel = 'Beginner',
      statement = 'None provided',
    } = body;

    // Validation
    if (!fullName || !email || !phone || !courseTitle) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields (Full Name, Email, Phone, and Course).' },
        { status: 400 }
      );
    }

    const referenceId = `PIN-ACAD-${Date.now().toString().slice(-6)}`;
    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Lagos',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // 1. Safe persistent local backup so no application is EVER lost
    try {
      const dataDir = path.join(process.cwd(), 'data');
      const backupFilePath = path.join(dataDir, 'applications.json');
      let applications: Array<ApplicationPayload & { referenceId: string; submittedAt: string }> = [];

      if (fs.existsSync(backupFilePath)) {
        const fileContent = fs.readFileSync(backupFilePath, 'utf-8');
        try {
          applications = JSON.parse(fileContent);
        } catch {
          applications = [];
        }
      }

      applications.unshift({
        referenceId,
        submittedAt: submissionDate,
        fullName,
        email,
        phone,
        courseId,
        courseTitle,
        preferredSchedule,
        studyMode,
        experienceLevel,
        statement,
      });

      fs.writeFileSync(backupFilePath, JSON.stringify(applications, null, 2), 'utf-8');
    } catch (saveErr) {
      console.warn('Failed to write to applications.json backup:', saveErr);
    }

    // 2. Dispatch email to company email (hello@pinfeeds.org) via Nodemailer
    const companyEmail = process.env.ADMIN_EMAIL || 'hello@pinfeeds.org';
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpSecure = process.env.SMTP_SECURE === 'true';

    let emailDispatched = false;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // HTML template for company email
      const companyEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #0095eb 0%, #0052cc 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0 0 8px; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 0; font-size: 14px; opacity: 0.9; }
            .badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 50px; font-size: 12px; font-weight: 700; margin-top: 10px; }
            .content { padding: 32px 24px; }
            .intro { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .table th, .table td { padding: 12px 16px; text-align: left; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
            .table th { background: #f8fafc; color: #64748b; font-weight: 600; width: 35%; }
            .table td { color: #0f172a; font-weight: 500; }
            .statement-box { background: #f8fafc; border-left: 4px solid #0095eb; padding: 16px; border-radius: 4px; font-style: italic; color: #334155; line-height: 1.6; margin-bottom: 24px; }
            .actions { text-align: center; padding: 16px 0; }
            .btn { display: inline-block; background: #0095eb; color: #ffffff !important; padding: 12px 28px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 14px; margin: 4px; }
            .footer { background: #f8fafc; padding: 20px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New IT Academy Application</h1>
              <p>Pinfeeds Digital Agency Limited Admissions Desk</p>
              <div class="badge">Reference: ${referenceId}</div>
            </div>
            <div class="content">
              <p class="intro">
                A new prospective student has submitted an application for <strong>${courseTitle}</strong> via the Pinfeeds Academy online portal. Please review their details below:
              </p>

              <table class="table">
                <tr>
                  <th>Student Full Name</th>
                  <td><strong>${fullName}</strong></td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td><a href="mailto:${email}" style="color: #0095eb;">${email}</a></td>
                </tr>
                <tr>
                  <th>Phone / WhatsApp</th>
                  <td><a href="tel:${phone}" style="color: #0095eb;">${phone}</a></td>
                </tr>
                <tr>
                  <th>Course Applied For</th>
                  <td><strong>${courseTitle}</strong></td>
                </tr>
                <tr>
                  <th>Preferred Schedule</th>
                  <td>${preferredSchedule}</td>
                </tr>
                <tr>
                  <th>Study Mode</th>
                  <td>${studyMode}</td>
                </tr>
                <tr>
                  <th>Current Experience</th>
                  <td>${experienceLevel}</td>
                </tr>
                <tr>
                  <th>Submitted At</th>
                  <td>${submissionDate}</td>
                </tr>
              </table>

              <h4 style="margin: 0 0 8px; color: #0f172a; font-size: 14px;">Statement of Intent / Goals:</h4>
              <div class="statement-box">
                "${statement}"
              </div>

              <div class="actions">
                <a href="mailto:${email}?subject=Welcome to Pinfeeds Academy - ${courseTitle} (Ref: ${referenceId})" class="btn">
                  Reply to Applicant
                </a>
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="btn" style="background: #25d366;">
                  Message on WhatsApp
                </a>
              </div>
            </div>
            <div class="footer">
              Pinfeeds Digital Agency Limited &bull; 22 Bankole Fagbohun St, Ogba, Lagos &bull; +234 806 689 3144
            </div>
          </div>
        </body>
        </html>
      `;

      try {
        await transporter.sendMail({
          from: `"Pinfeeds Academy Admissions" <${smtpUser}>`,
          to: companyEmail,
          replyTo: email,
          subject: `[Pinfeeds Academy Application] ${courseTitle} - ${fullName} (${referenceId})`,
          html: companyEmailHtml,
        });
        emailDispatched = true;

        // Also attempt to send an applicant confirmation email
        try {
          await transporter.sendMail({
            from: `"Pinfeeds Academy" <${smtpUser}>`,
            to: email,
            subject: `Application Received: ${courseTitle} — Pinfeeds Academy`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0095eb; margin-bottom: 12px;">Welcome to Pinfeeds Academy, ${fullName}!</h2>
                <p style="color: #334155; line-height: 1.6;">
                  We have received your application for <strong>${courseTitle}</strong>.
                </p>
                <div style="background: #f8fafc; padding: 16px; border-radius: 6px; margin: 20px 0;">
                  <p style="margin: 4px 0;"><strong>Application Reference:</strong> ${referenceId}</p>
                  <p style="margin: 4px 0;"><strong>Course:</strong> ${courseTitle}</p>
                  <p style="margin: 4px 0;"><strong>Cohort Track:</strong> ${preferredSchedule}</p>
                  <p style="margin: 4px 0;"><strong>Mode:</strong> ${studyMode}</p>
                </div>
                <p style="color: #334155; line-height: 1.6;">
                  Our admissions coordinator will review your profile and reach out via email/phone within 24 hours with your enrollment package, syllabus outline, and onboarding schedule.
                </p>
                <p style="color: #64748b; font-size: 13px; margin-top: 24px;">
                  If you have urgent questions, you can reach us on WhatsApp at <a href="https://wa.me/2348066893144">+234 806 689 3144</a> or reply directly to this email.
                </p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p style="color: #94a3b8; font-size: 11px;">Pinfeeds Digital Agency Limited &bull; Lagos, Nigeria &bull; pinfeeds.org</p>
              </div>
            `,
          });
        } catch (applicantEmailErr) {
          console.warn('Could not dispatch applicant confirmation email:', applicantEmailErr);
        }
      } catch (smtpErr) {
        console.error('SMTP sending error:', smtpErr);
      }
    } else {
      console.log('SMTP not fully configured; application safely stored in data/applications.json');
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Application registered successfully.',
      emailDispatched,
    });
  } catch (error) {
    console.error('API /academy/apply error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing application.' },
      { status: 500 }
    );
  }
}
