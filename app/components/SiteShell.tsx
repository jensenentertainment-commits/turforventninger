// app/components/SiteShell.tsx
import Link from "next/link";
import { SITE } from "../lib/site";
import Image from "next/image";


export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="relative sticky top-0 z-20 border-b border-emerald-950/30 bg-emerald-900/80 text-emerald-50 backdrop-blur">
        {/* Kartlinje-tekstur */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-3">
  <Image
    src="/logo/logo-emblem.png"
    alt="Foreningen for Forventningen om Rolige Turer i Moderat Tempo"
    width={44}
    height={44}
    className="opacity-90 transition-opacity group-hover:opacity-100"
    priority
  />

  <div>
    <div className="text-xs tracking-widest text-emerald-100/90">
      {SITE.domain}
    </div>
    <div className="text-base font-medium tracking-tight group-hover:underline">
      {SITE.displayName}
    </div>
  </div>
</Link>


          <nav className="flex items-center gap-4 text-sm">
            <Link className="text-emerald-50/90 hover:text-white" href="/om">
              Om
            </Link>
            <Link
              className="text-emerald-50/90 hover:text-white"
              href="/organisasjon"
            >
              Organisasjon
            </Link>
            <Link
              className="text-emerald-50/90 hover:text-white"
              href="/referater"
            >
              Referater
            </Link>
            <Link className="text-emerald-50/90 hover:text-white" href="/kart">
  Kart
</Link>
<Link className="text-emerald-50/90 hover:text-white" href="/medlemskap">
  Medlemskap
</Link>

          </nav>
        </div>
      </header>

      {/* Innhold */}
<div className="relative">
  {/* Diskret bakgrunn */}
  <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]">
    <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.6),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.5),transparent_45%)]" />
  </div>

  {children}
</div>


    {/* Footer */}
<footer className="relative border-t border-white/10 bg-neutral-950 text-white">
  {/* Diskret kartlinje-tekstur */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
    <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:32px_32px]" />
  </div>

  <div className="relative mx-auto max-w-6xl px-6 py-7 space-y-6">
    {/* Avsender */}
    <div className="flex items-center gap-3">
      <Image
        src="/logo/logo-emblem.png"
        alt=""
        width={22}
        height={22}
        className="opacity-80"
      />
      <div className="leading-tight">
        <p className="text-sm font-medium">
          {SITE.displayName}
        </p>
        <p className="text-xs text-white/60">
          Etablert etter behov. Videreført ved anledning.
        </p>
      </div>
    </div>

    {/* Status */}
    <div className="space-y-1 text-sm text-white/80">
      <p>
        Status: <span className="text-white">{SITE.tagline}</span>
      </p>
      <p className="text-white/60">
        Det tas forbehold om endringer i tempo, rute og ambisjonsnivå.
      </p>
    </div>

    {/* Meta */}
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/55">
      <a
        href="/supplerende-materiale"
        className="underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
      >
        Supplerende materiale
      </a>
      <span className="text-white/25">·</span>
      <span>
        Turforventning.no er foreningens primære informasjonsflate.
Forventet korrespondanse skjer via turforventinger.no.
      </span>
    </div>
  </div>
</footer>

</div>
  );
}
