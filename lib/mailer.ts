import nodemailer from 'nodemailer';

interface SendTestLinkParams {
  to: string;
  studentName: string;
  studentEmail: string;
  testTitle: string;
  testAssignmentId: string;
  magicLink: string;
  generatedPassword?: string;
  durationMins?: number;
  totalMarks?: number;
}

interface SendWelcomeParams {
  to: string;
  studentName: string;
  tempPassword: string;
  loginUrl: string;
}

interface SendTestNotificationParams {
  to: string;
  studentName: string;
  testTitle: string;
  subject: string;
  durationMins: number;
  expiresAt: Date;
  loginUrl: string;
}

// ── Shared Design Tokens ──────────────────────────────────────────────

const BRAND = {
  name: 'BuzzyBrains',
  tagline: 'Learn Smart. Grow Confident.',
  primaryColor: '#f59e0b',   // amber-500
  primaryDark: '#d97706',    // amber-600
  accentColor: '#6366f1',    // indigo
  bgOuter: '#0f172a',        // slate-900
  bgCard: '#1e293b',         // slate-800
  bgInset: '#111827',        // gray-900
  bgDeep: '#0b0f19',
  textPrimary: '#f8fafc',
  textSecondary: '#cbd5e1',
  textMuted: '#94a3b8',
  textDim: '#64748b',
  border: '#334155',
  warningColor: '#fbbf24',
  dangerColor: '#ef4444',
} as const;

function emailShell(innerContent: string): string {
  return `
    <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:620px;margin:0 auto;padding:0;background:${BRAND.bgOuter};border-radius:16px;border:1px solid ${BRAND.border};overflow:hidden;">
      <!-- Header Banner -->
      <div style="background:linear-gradient(135deg,${BRAND.bgOuter} 0%,#1a1a3e 50%,${BRAND.bgOuter} 100%);padding:32px 24px 24px;text-align:center;border-bottom:2px solid ${BRAND.primaryColor};">
        <h1 style="margin:0;font-size:28px;font-weight:800;letter-spacing:0.5px;">
          <span style="color:${BRAND.primaryColor};">Buzzy</span><span style="color:${BRAND.textPrimary};">Brains</span>
        </h1>
        <p style="margin:6px 0 0;font-size:12px;color:${BRAND.textMuted};letter-spacing:2px;text-transform:uppercase;">${BRAND.tagline}</p>
      </div>

      <!-- Body -->
      <div style="padding:28px 24px;">
        ${innerContent}
      </div>

      <!-- Footer -->
      <div style="border-top:1px solid ${BRAND.border};padding:20px 24px;text-align:center;background:${BRAND.bgInset};">
        <p style="margin:0 0 4px;font-size:13px;color:${BRAND.textMuted};">Team <strong style="color:${BRAND.primaryColor};">BuzzyBrains</strong></p>
        <p style="margin:0;font-size:11px;color:${BRAND.textDim};">Making learning engaging, interactive &amp; concept-focused</p>
      </div>
    </div>`;
}

function ctaButton(href: string, label: string): string {
  return `<div style="text-align:center;margin:24px 0;">
    <a href="${href}" style="display:inline-block;background:linear-gradient(135deg,${BRAND.primaryColor},${BRAND.primaryDark});color:#0f172a;padding:14px 32px;font-size:15px;font-weight:700;text-decoration:none;border-radius:8px;box-shadow:0 4px 14px rgba(245,158,11,0.35);letter-spacing:0.3px;">
      ${label}
    </a>
  </div>`;
}

function infoRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:${BRAND.textMuted};font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:6px 0;color:${BRAND.textPrimary};font-size:13px;font-weight:600;">${value}</td>
  </tr>`;
}

// ── Transport & Send Logic ────────────────────────────────────────────

function getTransporter() {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT } = process.env;

  console.log(`[MAILER] Config check — HOST: ${EMAIL_HOST || '(unset)'}, PORT: ${EMAIL_PORT || '(unset)'}, USER: ${EMAIL_USER || '(unset)'}, PASS: ${EMAIL_PASS ? '***set***' : '(unset)'}`);

  if (!EMAIL_USER || !EMAIL_PASS) return null;

  return nodemailer.createTransport({
    host: EMAIL_HOST || 'smtp.gmail.com',
    port: Number(EMAIL_PORT) || 587,
    secure: EMAIL_PORT === '465',
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
}

async function trySend(to: string, subject: string, html: string, label: string): Promise<{ success: boolean; message: string; messageId?: string }> {
  console.log(`\n======== 📧 ${label} ========`);
  console.log(`To: ${to} | Subject: ${subject}`);
  console.log('================================\n');

  const transporter = getTransporter();
  if (!transporter) {
    console.log('⚠️ NO SMTP CREDENTIALS — running in simulation mode. Email NOT actually sent.');
    return { success: true, message: 'Simulated (no SMTP creds)', messageId: `sim-${Date.now()}` };
  }

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const info = await transporter.sendMail({
        from: `"BuzzyBrains" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
      });
      console.log(`✅ Email SENT (attempt ${attempt}). MessageID: ${info.messageId}`);
      return { success: true, message: 'Sent', messageId: info.messageId };
    } catch (err: any) {
      console.error(`❌ SMTP attempt ${attempt} FAILED:`, err.message);
      if (attempt < 3) await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
  console.error('❌ All 3 SMTP attempts failed. Email NOT delivered.');
  return { success: false, message: 'SMTP failed after 3 attempts' };
}

// ── 1. Welcome / Credential Email ─────────────────────────────────────

export async function sendWelcomeCredentials({ to, studentName, tempPassword, loginUrl }: SendWelcomeParams): Promise<{ success: boolean; message: string; messageId?: string }> {
  const inner = `
    <div style="background:${BRAND.bgCard};padding:24px;border-radius:12px;margin-bottom:20px;">
      <p style="font-size:16px;margin:0 0 16px;color:${BRAND.textPrimary};">Dear <strong>Student/Parent</strong>,</p>
      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 16px;">
        Welcome to <strong style="color:${BRAND.primaryColor};">BuzzyBrains Edtech Platform</strong>! 🎉
      </p>
      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 16px;">
        We are excited to have <strong style="color:${BRAND.textPrimary};">${studentName}</strong> join our learning community.
      </p>
      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 20px;">
        At BuzzyBrains, our goal is to make learning <strong style="color:${BRAND.textPrimary};">engaging, interactive, and concept-focused</strong> while helping students build confidence and academic excellence.
      </p>

      <!-- Credentials Box -->
      <div style="background:${BRAND.bgInset};padding:18px 20px;border-radius:10px;border:1px solid ${BRAND.border};margin:0 0 20px;">
        <p style="margin:0 0 6px;font-size:12px;color:${BRAND.textMuted};text-transform:uppercase;letter-spacing:1px;">Login Credentials</p>
        <table style="border-collapse:collapse;width:100%;">
          ${infoRow('Email', to)}
          ${infoRow('Password', `<span style="color:${BRAND.primaryColor};font-size:15px;">${tempPassword}</span>`)}
        </table>
      </div>

      <p style="color:${BRAND.warningColor};font-size:13px;margin:0 0 20px;">⚠️ You will be asked to change your password on first login.</p>

      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 8px;">
        Your registration has been successfully completed. You will shortly receive:
      </p>
      <ul style="color:${BRAND.textSecondary};font-size:14px;line-height:2;margin:0 0 20px;padding-left:20px;">
        <li>Batch allocation details</li>
        <li>Class schedule</li>
        <li>Platform access information</li>
        <li>Test and assignment updates</li>
      </ul>

      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 4px;">
        Please feel free to reach out if you need any assistance regarding classes, login access, or study material.
      </p>
    </div>

    ${ctaButton(loginUrl, '🔑  Login to BuzzyBrains')}

    <p style="text-align:center;color:${BRAND.textMuted};font-size:13px;margin:0;line-height:1.6;">
      We look forward to an exciting learning journey together!
    </p>`;

  console.log(`🔑 Temp password for ${studentName} (${to}): ${tempPassword}`);
  return trySend(to, `Welcome to BuzzyBrains – Your Account is Ready! 🎉`, emailShell(inner), 'WELCOME EMAIL');
}

// ── 2. Test Dispatch (Magic Link) Email ────────────────────────────────

export async function sendTestMagicLink({
  to, studentName, studentEmail, testTitle, testAssignmentId, magicLink, generatedPassword, durationMins, totalMarks,
}: SendTestLinkParams): Promise<{ success: boolean; message: string; messageId?: string }> {

  const inner = `
    <div style="background:${BRAND.bgCard};padding:24px;border-radius:12px;margin-bottom:20px;">
      <p style="font-size:16px;margin:0 0 16px;color:${BRAND.textPrimary};">Dear <strong>Student/Parent</strong>,</p>

      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 20px;">
        A new test/assignment has been uploaded on the <strong style="color:${BRAND.primaryColor};">BuzzyBrains</strong> platform.
      </p>

      <!-- Test Details Card -->
      <div style="background:${BRAND.bgDeep};padding:18px 20px;border-radius:10px;border-left:4px solid ${BRAND.primaryColor};margin:0 0 20px;">
        <p style="margin:0 0 4px;font-size:12px;color:${BRAND.textMuted};text-transform:uppercase;letter-spacing:1px;">Assessment Details</p>
        <p style="margin:8px 0 12px;font-size:18px;font-weight:700;color:${BRAND.textPrimary};">${testTitle}</p>
        <table style="border-collapse:collapse;width:100%;">
          ${infoRow('Subject / Topic', testTitle)}
          ${durationMins ? infoRow('Duration', `${durationMins} minutes`) : ''}
          ${totalMarks ? infoRow('Total Marks', `${totalMarks}`) : ''}
        </table>
      </div>

      <!-- Login Info -->
      <div style="background:${BRAND.bgInset};padding:18px 20px;border-radius:10px;border:1px solid ${BRAND.border};margin:0 0 20px;">
        <p style="margin:0 0 6px;font-size:12px;color:${BRAND.textMuted};text-transform:uppercase;letter-spacing:1px;">Your Login</p>
        <table style="border-collapse:collapse;width:100%;">
          ${infoRow('Email', studentEmail)}
          ${infoRow('Password', generatedPassword || 'Use your account password')}
        </table>
      </div>

      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 6px;">
        Students are requested to complete the assignment/test within the given timeline.
      </p>
      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 4px;">
        Regular practice and timely submissions help improve understanding and performance.
      </p>
    </div>

    ${ctaButton(magicLink, '📝  Start Assessment')}

    <p style="text-align:center;color:${BRAND.textMuted};font-size:13px;margin:0 0 4px;">Best wishes for your preparation!</p>
    <div style="text-align:center;margin-top:12px;">
      <p style="font-size:11px;color:${BRAND.textDim};word-break:break-all;">${magicLink}</p>
      <p style="font-size:11px;color:${BRAND.textDim};margin-top:4px;">Assignment ID: ${testAssignmentId}</p>
    </div>`;

  return trySend(to, `📝 New Assignment: ${testTitle} – BuzzyBrains`, emailShell(inner), 'TEST DISPATCH');
}

// ── 3. Test Notification (Batch/Quick-Create) Email ────────────────────

export async function sendTestNotification({
  to, studentName, testTitle, subject, durationMins, expiresAt, loginUrl,
}: SendTestNotificationParams): Promise<{ success: boolean; message: string; messageId?: string }> {
  const expiryStr = expiresAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const timeLeftMs = expiresAt.getTime() - Date.now();
  const timeLeftMins = Math.max(0, Math.round(timeLeftMs / 60000));
  const timeLeftStr = timeLeftMins >= 60 ? `${Math.floor(timeLeftMins / 60)}h ${timeLeftMins % 60}m` : `${timeLeftMins} minutes`;

  const inner = `
    <div style="background:${BRAND.bgCard};padding:24px;border-radius:12px;margin-bottom:20px;">
      <p style="font-size:16px;margin:0 0 16px;color:${BRAND.textPrimary};">Dear <strong>Student/Parent</strong>,</p>

      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 20px;">
        A new test/assignment has been uploaded on the <strong style="color:${BRAND.primaryColor};">BuzzyBrains</strong> platform.
      </p>

      <!-- Test Details Card -->
      <div style="background:${BRAND.bgDeep};padding:18px 20px;border-radius:10px;border-left:4px solid ${BRAND.primaryColor};margin:0 0 16px;">
        <p style="margin:0 0 4px;font-size:12px;color:${BRAND.textMuted};text-transform:uppercase;letter-spacing:1px;">Assessment Details</p>
        <p style="margin:8px 0 12px;font-size:18px;font-weight:700;color:${BRAND.textPrimary};">${testTitle}</p>
        <table style="border-collapse:collapse;width:100%;">
          ${infoRow('Subject', subject)}
          ${infoRow('Duration', `${durationMins} minutes`)}
          ${infoRow('Submission Deadline', expiryStr)}
        </table>
      </div>

      <!-- Countdown Banner -->
      <div style="background:${BRAND.bgInset};padding:14px 20px;border-radius:10px;border:1px solid ${BRAND.border};margin:0 0 20px;text-align:center;">
        <p style="color:${BRAND.warningColor};font-size:14px;margin:0;font-weight:600;">⏰ Time Remaining: <strong style="color:${BRAND.textPrimary};">${timeLeftStr}</strong></p>
      </div>

      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 6px;">
        Students are requested to complete the assignment/test within the given timeline.
      </p>
      <p style="color:${BRAND.textSecondary};font-size:14px;line-height:1.7;margin:0 0 6px;">
        Regular practice and timely submissions help improve understanding and performance.
      </p>
      <p style="color:${BRAND.dangerColor};font-size:12px;margin:12px 0 0;">
        ⚠️ Tab switching during the test will be monitored and reported to your teacher.
      </p>
    </div>

    ${ctaButton(loginUrl, '📝  Login & Start Test')}

    <p style="text-align:center;color:${BRAND.textMuted};font-size:13px;margin:0;">Best wishes for your preparation!</p>`;

  return trySend(to, `📝 New Assignment: ${testTitle} – BuzzyBrains`, emailShell(inner), 'TEST NOTIFICATION');
}
