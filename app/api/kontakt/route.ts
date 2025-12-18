import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs"; // viktig for Resend

const resend = new Resend(process.env.RESEND_API_KEY);

// enkel in-memory rate limit (ok for hobby, resetter ved redeploy)
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const cur = buckets.get(key);

  if (!cur || now > cur.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (cur.count >= limit) {
    return { ok: false, retryAfterMs: cur.resetAt - now };
  }

  cur.count += 1;
  buckets.set(key, cur);
  return { ok: true };
}

const schema = z.object({
  ref: z.string().min(6).max(40),
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  type: z.enum(["medlemskap", "komite", "annet"]),
  unit: z.string().min(2).max(80),
  message: z.string().min(10).max(5000),
  consent: z.boolean(),
  company: z.string().optional().default(""), // honeypot
});

function safe(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

function labelType(type: string) {
  if (type === "medlemskap") return "Medlemskap";
  if (type === "komite") return "Komité/utvalg";
  return "Annet";
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { success: false, error: "For mange henvendelser (foreløpig)." },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }

    const json = await req.json().catch(() => null);
    const parsed = schema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Ugyldig henvendelse (veiledende)." },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // honeypot: hvis utfylt -> late som suksess
    if (data.company && data.company.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!data.consent) {
      return NextResponse.json(
        { success: false, error: "Samtykke foreligger ikke." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Mangler RESEND_API_KEY." },
        { status: 500 },
      );
    }
    if (!to || !from) {
      return NextResponse.json(
        { success: false, error: "Mangler e-postkonfigurasjon." },
        { status: 500 },
      );
    }

    const subject = `[${data.ref}] ${labelType(data.type)} – ${safe(data.unit)}`;

    const text = [
      "Henvendelse mottatt (foreløpig).",
      "",
      `Referanse: ${data.ref}`,
      `Type: ${labelType(data.type)}`,
      `Utvalg/komité: ${safe(data.unit)}`,
      "",
      `Navn: ${safe(data.name)}`,
      `E-post: ${safe(data.email)}`,
      `IP: ${ip}`,
      "",
      "Melding:",
      data.message.trim(),
      "",
      "Merknad: Innsendt forespørsel innebærer ikke innvilgelse, behandling eller fremdrift.",
    ].join("\n");

    await resend.emails.send({
      from,
      to,
      replyTo: data.email, // så du kan svare direkte
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: "Uventet avvik ved innsending." },
      { status: 500 },
    );
  }
}
