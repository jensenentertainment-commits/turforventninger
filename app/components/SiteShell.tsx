"use client";

import Link from "next/link";
import { SITE } from "../lib/site";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/om", label: "Om" },
  { href: "/organisasjon", label: "Organisasjon" },
  { href: "/referater", label: "Referater" },
  { href: "/kart", label: "Kart" },
  { href: "/medlemskap", label: "Medlemskap" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Lås scrolling når menyen er åpen (mobil)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="relative sticky top-0 z-30 border-b border-emerald-950/30 bg-emerald-900/80 text-emerald-50 backdrop-blur">
        {/* Kartlinje-tekstur */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/logo/logo-emblem.png"
              alt="Foreningen for Forventningen om Rolige Turer i Moderat Tempo"
              width={44}
              height={44}
              className="opacity-90 transition-opacity group-hover:opacity-100"
              priority
            />

            <div className="min-w-0">
              <div className="text-xs tracking-widest text-emerald-100/90">
                {SITE.domain}
              </div>
              <div className="truncate text-base font-medium tracking-tight group-hover:underline">
                {SITE.displayName}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm relative -top-[1px]">

            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                className="text-emerald-50/90 hover:text-white"
                href={l.href}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 relative -top-[1px]"

            aria-label="Åpne meny"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl pt-1">

            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="text-sm font-semibold text-neutral-900">Meny</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50"
                aria-label="Lukk meny"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-3 py-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t px-5 py-4 text-xs text-neutral-500">
              Etableres ved behov. Videreføres ved anledning.
            </div>
          </div>
        </div>
      )}

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
              <p className="text-sm font-medium">{SITE.displayName}</p>
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
