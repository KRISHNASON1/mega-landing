export function generateEmailHTML(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                New Customer Enquiry
              </h1>
              <p style="margin: 10px 0 0; color: #f0f0f0; font-size: 14px;">
                MEGA Enterprise Contact Form
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Customer Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td colspan="2" style="padding-bottom: 20px; border-bottom: 2px solid #667eea;">
                    <h2 style="margin: 0; color: #333333; font-size: 20px;">Customer Details</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; width: 140px; color: #666666; font-weight: bold; vertical-align: top;">
                    Full Name:
                  </td>
                  <td style="padding: 15px 0; color: #333333;">
                    ${name}
                  </td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 15px 10px; color: #666666; font-weight: bold; vertical-align: top;">
                    Company Name:
                  </td>
                  <td style="padding: 15px 10px; color: #333333;">
                    ${company}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; color: #666666; font-weight: bold; vertical-align: top;">
                    Email:
                  </td>
                  <td style="padding: 15px 0; color: #333333;">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 15px 10px; color: #666666; font-weight: bold; vertical-align: top;">
                    Phone:
                  </td>
                  <td style="padding: 15px 10px; color: #333333;">
                    <a href="tel:+91${phone}" style="color: #667eea; text-decoration: none;">
                      +91 ${phone}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Requirements -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 15px; border-bottom: 2px solid #667eea;">
                    <h2 style="margin: 0; color: #333333; font-size: 20px;">Requirements</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 4px;">
                    <p style="margin: 0; color: #333333; line-height: 1.6; white-space: pre-wrap;">
                      ${requirements}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #f9f9f9; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px; color: #666666; font-size: 14px;">
                This email was sent from the MEGA Enterprise website contact form
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
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

export function generatePlainTextEmail(formData) {
  const { name, company, email, phone, requirements } = formData;

  return `
NEW CUSTOMER ENQUIRY - MEGA Enterprise
======================================

CUSTOMER DETAILS:
-----------------
Full Name:     ${name}
Company Name:  ${company}
Email:         ${email}
Phone:         +91 ${phone}

REQUIREMENTS:
-------------
${requirements}

======================================
Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
This email was sent from the MEGA Enterprise website contact form
  `;
}
