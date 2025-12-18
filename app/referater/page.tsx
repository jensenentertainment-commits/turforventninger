import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { MINUTES } from "../lib/referater";

export default function ReferaterPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Referater</h1>
        <p className="mt-3 text-sm text-neutral-700">
          Dokumentasjonen publiseres ved anledning. Enkelte forhold omtales i
          sammendrag.
        </p>

        <div className="mt-8 grid gap-4">
          {MINUTES.map((m) => (
            <Link
              key={m.slug}
              href={`/referater/${m.slug}`}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500" />
              <p className="text-xs text-neutral-600">{m.date}</p>
              <h2 className="mt-2 text-base font-medium tracking-tight">{m.title}</h2>
              <p className="mt-3 text-sm text-neutral-700">{m.summary}</p>
              <p className="mt-4 text-xs text-neutral-500">Åpne</p>
            </Link>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
