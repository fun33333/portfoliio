import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const payload: Partial<ContactPayload> = await req.json();
    const { name, email, subject, message } = payload as ContactPayload;

    //  Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    //  ZeroBounce Email Validation
    const zbApiKey = process.env.ZEROBOUNCE_API_KEY;
    if (!zbApiKey) {
      return NextResponse.json(
        { success: false, error: "ZeroBounce API key not configured" },
        { status: 500 }
      );
    }

    const zbResponse = await fetch(
      `https://api.zerobounce.net/v2/validate?api_key=${zbApiKey}&email=${email}`
    );

    if (!zbResponse.ok) {
      return NextResponse.json(
        { success: false, error: "Email validation service error" },
        { status: 500 }
      );
    }

    const zbData = await zbResponse.json();

    if (zbData.status !== "valid") {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    //  Check Email ENV
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      return NextResponse.json(
        { success: false, error: "Email configuration missing" },
        { status: 500 }
      );
    }

    //  Create Transporter
    const transporter = nodemailer.createTransport({
      host: "mail.quadgentics.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    //  Send Email to Admin
    await transporter.sendMail({
      from: user,
      to: user,
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    //  Auto Reply to Client
    await transporter.sendMail({
      from: user,
      to: email,
      subject: "We received your message ",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for contacting us.</p>
        <p>Our team will get back to you shortly.</p>
        <br/>
        <p>Best Regards,<br/>Your Company Team</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

