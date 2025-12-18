import Link from "next/link";

export function Page({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="mt-3 text-sm text-neutral-700">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </main>
  );
}

export function Card({
  title,
  meta,
  children,
  href,
}: {
  title?: string;
  meta?: string;
  children: React.ReactNode;
  href?: string;
}) {
  const Inner = (
    <div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500" />
      {title ? (
        <div className="mb-4">
          <h2 className="text-base font-medium tracking-tight">{title}</h2>
          {meta ? <p className="mt-1 text-xs text-neutral-600">{meta}</p> : null}
        </div>
      ) : null}
      <div className="text-sm text-neutral-700">{children}</div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className="block transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {Inner}
    </Link>
  ) : (
    Inner
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "utmark" | "vatmark" | "urban" | "tempo" | "neutral";
}) {
  const tones: Record<string, string> = {
    utmark: "border-emerald-200 bg-emerald-50 text-emerald-900",
    vatmark: "border-sky-200 bg-sky-50 text-sky-900",
    urban: "border-amber-200 bg-amber-50 text-amber-900",
    tempo: "border-violet-200 bg-violet-50 text-violet-900",
    neutral: "border-neutral-200 bg-white text-neutral-700",
  };

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs",
        tones[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
