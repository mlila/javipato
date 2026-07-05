import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const description = String(formData.get("description") ?? "");
    const placement = String(formData.get("placement") ?? "");
    const size = String(formData.get("size") ?? "");
    const files = formData.getAll("images");

    if (!name || !email || !description || !placement || !size) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          message:
            "Email delivery is not configured yet. Set RESEND_API_KEY.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.BOOKING_TO_EMAIL ?? "hello@javipato.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();

    if (!fromEmail) {
      return NextResponse.json(
        {
          message:
            "Set RESEND_FROM_EMAIL to a verified sender address in Resend.",
        },
        { status: 500 },
      );
    }

    if (fromEmail.endsWith("@resend.dev")) {
      return NextResponse.json(
        {
          message:
            "The current sender address is a Resend test address. Use a verified sender domain for production.",
        },
        { status: 500 },
      );
    }

    const attachments: Array<{
      filename: string;
      content: string;
      contentType?: string;
    }> = [];

    for (const entry of files) {
      if (entry instanceof File) {
        const bytes = Buffer.from(await entry.arrayBuffer());
        attachments.push({
          filename: entry.name || `reference-${attachments.length + 1}`,
          content: bytes.toString("base64"),
          contentType: entry.type || "application/octet-stream",
        });
      }
    }

    const html = `
      <h2>New tattoo inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Placement:</strong> ${placement}</p>
      <p><strong>Size:</strong> ${size}</p>
      <p><strong>Description:</strong></p>
      <p>${description.replace(/\n/g, "<br />")}</p>
      <p><strong>Reference images:</strong> ${attachments.length}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New tattoo inquiry from ${name}`,
      replyTo: email,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error", error);
    return NextResponse.json(
      { message: "We couldn't send your inquiry right now." },
      { status: 500 },
    );
  }
}
