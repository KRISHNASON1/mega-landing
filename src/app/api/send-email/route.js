import { NextResponse } from 'next/server';
import { transporter } from '@/lib/nodemailer';
import { generateEmailHTML, generatePlainTextEmail } from '@/lib/email-template';

export async function POST(request) {
  try {
    // Parse request body
    const formData = await request.json();

    // Validate required fields
    const { name, company, email, phone, requirements } = formData;

    if (!name || !company || !email || !phone || !requirements) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate phone (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Generate email content
    const htmlContent = generateEmailHTML(formData);
    const textContent = generatePlainTextEmail(formData);

    // Email options
    const mailOptions = {
      from: {
        name: 'MEGA Enterprise Website',
        address: process.env.EMAIL_FROM,
      },
      to: process.env.EMAIL_TO,
      subject: `New Enquiry from ${name} - ${company}`,
      text: textContent,
      html: htmlContent,
      replyTo: email, // Allow direct reply to customer
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);

    // Return detailed error in development, generic in production
    const isDevelopment = process.env.NODE_ENV === 'development';

    return NextResponse.json(
      {
        error: isDevelopment
          ? error.message
          : 'Failed to send email. Please try again or contact us directly.',
        details: isDevelopment ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
