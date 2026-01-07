import { NextResponse } from "next/server";
import { Resend } from "resend";

const REQUIRED_FIELDS = ["name", "company", "email", "topic", "message"] as const;
type ContactPayload = Record<(typeof REQUIRED_FIELDS)[number], string> & Record<string, string>;

const resendKey = process.env.RESEND_API_KEY;
const forwardTargets = process.env.CONTACT_FORWARD_TO?.split(",").map((entry) => entry.trim()).filter(Boolean);

const resend = resendKey ? new Resend(resendKey) : null;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    for (const field of REQUIRED_FIELDS) {
      if (!body[field] || `${body[field]}`.trim().length === 0) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }

    if (!resend) {
      console.error("Contact endpoint missing RESEND_API_KEY");
      return NextResponse.json({ error: "Delivery not configured" }, { status: 503 });
    }

    const to = forwardTargets?.length ? forwardTargets : ["compliance@blox.capital"];
    const subject = `Blox Capital site inquiry — ${body.topic}`;
    const html = `
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Company:</strong> ${body.company}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Topic:</strong> ${body.topic}</p>
      <p><strong>Message:</strong></p>
      <p>${(body.message ?? "").replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: "Blox Capital Site <site@blox.capital>",
      to,
      subject,
      replyTo: body.email,
      html,
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Contact endpoint error", error);
    return NextResponse.json({ error: "Unable to process request" }, { status: 500 });
  }
}
