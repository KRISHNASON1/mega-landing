export function generateCustomerConfirmationHTML(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for your enquiry - MEGA Enterprise</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 8px 24px rgba(0,0,0,0.12); border-radius: 12px; overflow: hidden;">

          <!-- Logo Section -->
          <tr>
            <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              <img src="https://image2url.com/images/1765712763735-5003f785-7eff-4346-ab7d-df6c77626e0b.png"
                   alt="MEGA Enterprise Logo"
                   style="max-width: 200px; height: auto; display: block; margin: 0 auto 20px; filter: brightness(0) invert(1);" />
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                MEGA ENTERPRISE
              </h1>
              <p style="margin: 8px 0 0; color: #f0f0f0; font-size: 16px; letter-spacing: 1px;">
                Reach For Everything You Need
              </p>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <table role="presentation" style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; margin: 0 auto 24px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                <tr>
                  <td style="text-align: center; vertical-align: middle; font-size: 48px; color: white; line-height: 80px;">
                    ✓
                  </td>
                </tr>
              </table>
              <h2 style="margin: 0 0 16px; color: #2c3e50; font-size: 28px; font-weight: 700;">
                Thank You, ${name}!
              </h2>
              <p style="margin: 0; color: #5a6c7d; font-size: 16px; line-height: 1.6;">
                We have successfully received your enquiry and appreciate your interest in MEGA Enterprise.
              </p>
            </td>
          </tr>

          <!-- Response Time Info -->
          <tr>
            <td style="padding: 0 30px 32px;">
              <div style="background: linear-gradient(to right, #f8f9ff 0%, #e8f4ff 100%); border-left: 4px solid #667eea; border-radius: 8px; padding: 24px;">
                <p style="margin: 0 0 12px; color: #2c3e50; font-size: 18px; font-weight: 600;">
                  ⏱️ What's Next?
                </p>
                <p style="margin: 0 0 8px; color: #5a6c7d; font-size: 15px; line-height: 1.6;">
                  Our team will review your requirements and get back to you within <strong>24 hours</strong> (Monday-Saturday, 9 AM - 7 PM).
                </p>
                <p style="margin: 0; color: #5a6c7d; font-size: 14px; line-height: 1.6;">
                  For urgent enquiries, please call us directly at <a href="tel:+917506070157" style="color: #667eea; text-decoration: none; font-weight: 600;">+91 750 6070 157</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Enquiry Summary -->
          <tr>
            <td style="padding: 0 30px 32px;">
              <h3 style="margin: 0 0 16px; color: #2c3e50; font-size: 20px; font-weight: 700;">
                📋 Your Enquiry Details
              </h3>
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fafbfc; border-radius: 8px; overflow: hidden;">
                <tr style="background-color: #f8f9ff;">
                  <td style="padding: 14px 20px; color: #5a6c7d; font-weight: 600; font-size: 14px; width: 35%;">
                    Company:
                  </td>
                  <td style="padding: 14px 20px; color: #2c3e50; font-size: 15px;">
                    ${company}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; color: #5a6c7d; font-weight: 600; font-size: 14px;">
                    Email:
                  </td>
                  <td style="padding: 14px 20px; color: #2c3e50; font-size: 15px;">
                    ${email}
                  </td>
                </tr>
                <tr style="background-color: #f8f9ff;">
                  <td style="padding: 14px 20px; color: #5a6c7d; font-weight: 600; font-size: 14px;">
                    Phone:
                  </td>
                  <td style="padding: 14px 20px; color: #2c3e50; font-size: 15px;">
                    +91 ${phone}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 20px; background-color: #ffffff;">
                    <p style="margin: 0 0 8px; color: #5a6c7d; font-weight: 600; font-size: 14px;">
                      Requirements:
                    </p>
                    <p style="margin: 0; color: #2c3e50; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                      ${requirements}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 32px 30px; background: linear-gradient(to bottom, #f8f9ff 0%, #e8ebf5 100%); border-top: 3px solid #667eea;">
              <h3 style="margin: 0 0 20px; color: #2c3e50; font-size: 18px; font-weight: 700; text-align: center;">
                📞 Need Immediate Assistance?
              </h3>
              <div style="background-color: #ffffff; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <p style="margin: 0 0 12px; color: #2c3e50; font-size: 16px; font-weight: 700; text-align: center;">
                  MEGA Enterprise
                </p>
                <p style="margin: 0 0 8px; color: #5a6c7d; font-size: 14px; text-align: center;">
                  📍 Plot No. 57, Opp M.I.D.C Water Tank TALOJA<br>
                  Navi Mumbai - 410208, Maharashtra, India
                </p>
                <div style="margin: 16px 0; padding: 16px; background: linear-gradient(to right, #f8f9ff 0%, #e8f4ff 100%); border-radius: 6px;">
                  <p style="margin: 0 0 6px; text-align: center;">
                    <a href="tel:+917506070157" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 600;">
                      📱 +91 750 6070 157
                    </a>
                  </p>
                  <p style="margin: 0; text-align: center;">
                    <a href="tel:02227410775" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 600;">
                      ☎️ 022 2741 0775
                    </a>
                  </p>
                </div>
                <p style="margin: 0; text-align: center;">
                  <a href="mailto:megaenterprise.info@gmail.com" style="color: #667eea; text-decoration: none; font-size: 14px;">
                    ✉️ megaenterprise.info@gmail.com
                  </a>
                </p>
                <p style="margin: 16px 0 0; color: #7f8c9f; font-size: 13px; text-align: center;">
                  <strong>Business Hours:</strong> Monday - Saturday, 9 AM - 7 PM
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 30px; background-color: #2c3e50; text-align: center;">
              <p style="margin: 0 0 8px; color: #e0e0e0; font-size: 13px;">
                This is an automated confirmation email. Please do not reply to this email.
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} MEGA Enterprise. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function generateCustomerConfirmationPlainText(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
MEGA ENTERPRISE
Reach For Everything You Need
======================================

Dear ${name},

THANK YOU FOR YOUR ENQUIRY!
✓ We have successfully received your enquiry

WHAT'S NEXT?
Our team will review your requirements and get back to you within 24 hours (Monday-Saturday, 9 AM - 7 PM).

For urgent enquiries, please call us directly at +91 750 6070 157

YOUR ENQUIRY DETAILS:
--------------------
Company:      ${company}
Email:        ${email}
Phone:        +91 ${phone}

Requirements:
${requirements}

CONTACT INFORMATION:
-------------------
MEGA Enterprise
Plot No. 57, Opp M.I.D.C Water Tank TALOJA
Navi Mumbai - 410208, Maharashtra, India

Phone: +91 750 6070 157 | 022 2741 0775
Email: megaenterprise.info@gmail.com

Business Hours: Monday - Saturday, 9 AM - 7 PM

======================================
This is an automated confirmation email.
© ${new Date().getFullYear()} MEGA Enterprise. All rights reserved.
  `;
}
