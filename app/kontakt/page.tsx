"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { Page, Card } from "../components/ui";
import { SITE } from "../lib/site";

type Status = "idle" | "sent";
type InquiryType = (typeof INQUIRY_TYPES)[number]["value"];
type UnitType = (typeof UNITS)[number]["value"];

type KontaktForm = {
  name: string;
  email: string;
  type: InquiryType;
  unit: UnitType;
  message: string;
  consent: boolean;
  company: string;
};

const INQUIRY_TYPES = [
  { value: "medlemskap", label: "Medlemskap (forespørsel)" },
  { value: "komite", label: "Komité / utvalg" },
  { value: "annet", label: "Annet (veiledende)" },
] as const;

const UNITS = [
  { value: "styret", label: "Styret" },
  { value: "medlemskapsutvalget", label: "Medlemskapsutvalget" },
  { value: "tempo-utvalg", label: "Tempo- og moderasjonsutvalget" },
  { value: "kart-komite", label: "Kart- og strekkomiteen" },
  { value: "annet", label: "Annet (foreløpig)" },
] as const;

function makeRef() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const rnd = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `TF-${y}${m}${day}-${rnd}`;
}

export default function KontaktPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [ref, setRef] = useState<string>("—");
  const [localError, setLocalError] = useState<string | null>(null);

  const [form, setForm] = useState<KontaktForm>({
  name: "",
  email: "",
  type: INQUIRY_TYPES[0].value,
  unit: UNITS[0].value,
  message: "",
  consent: false,
  company: "",
});


  useEffect(() => {
    setRef(makeRef()); // hydration-safe
  }, []);

  // Validering for Variant A (lokalt)
  function validate() {
    const missing: string[] = [];
    if (form.name.trim().length < 2) missing.push("navn");
    if (form.email.trim().length < 5) missing.push("e-post");
    if (form.message.trim().length < 10) missing.push("melding");
    if (!form.consent) missing.push("samtykke");

    return missing;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocalError(null);

    // Honeypot: late som suksess
    if (form.company.trim().length > 0) {
      setStatus("sent");
      return;
    }

    const missing = validate();
    if (missing.length > 0) {
      setLocalError(
        `Mangelfull henvendelse (foreløpig). Mangler: ${missing.join(", ")}.`,
      );
      return;
    }

    // Variant A: ingen ekte sending, kun "mottatt"
    setStatus("sent");
  }

  function reset() {
    setRef(makeRef());
    setForm({
      name: "",
      email: "",
      type: INQUIRY_TYPES[0].value,
      unit: UNITS[0].value,
      message: "",
      consent: false,
      company: "",
    });
    setLocalError(null);
    setStatus("idle");
  }

  const fieldBase =
    "w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200";
  const selectBase =
    "w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200";

  return (
    <SiteShell>
      <Page
        title="Kontakt"
        subtitle="Henvendelser mottas sentralt og vurderes fortløpende."
      >
        <div className="grid gap-4">
          <Card title="Henvendelse" meta="Veiledende">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              {status === "sent" ? (
                <div className="space-y-4 text-sm text-neutral-800">
                  <p className="text-neutral-900">
                    Henvendelsen er mottatt (foreløpig).
                  </p>

                  <div className="rounded-xl border border-neutral-200 bg-white p-4">
                    <p className="text-xs text-neutral-500">Referanse</p>
                    <p className="mt-1 font-medium text-neutral-900">
                      {ref === "—" ? "Opprettes..." : ref}
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">
                      Innsendt forespørsel innebærer ikke innvilgelse, behandling
                      eller fremdrift.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/sak/${encodeURIComponent(ref)}`}
                      className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
                    >
                      Se saksstatus
                    </Link>

                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                    >
                      Send ny henvendelse
                    </button>
                  </div>

                  <p className="text-xs text-neutral-500">
                    {SITE.domain} er foreningens primære informasjonsflate.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <div className="hidden">
                    <label>Company</label>
                    <input
                      value={form.company}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, company: e.target.value }))
                      }
                    />
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700">
                        Navn
                      </label>
                      <input
                        className={fieldBase}
                        placeholder="Navn (veiledende)"
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700">
                        E-post
                      </label>
                      <input
                        className={fieldBase}
                        placeholder="epost@eksempel.no"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700">
                        Type henvendelse
                      </label>
                      <select
                        className={selectBase}
                        value={form.type}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, unit: e.target.value as UnitType }))
                        }
                      >
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700">
                        Utvalg/komité
                      </label>
                      <select
                        className={selectBase}
                        value={form.unit}
                        onChange={(e) =>
                         setForm((f) => ({ ...f, unit: e.target.value as UnitType }))
                        }
                      >
                        {UNITS.map((u) => (
                          <option key={u.value} value={u.value}>
                            {u.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-neutral-700">
                      Melding
                    </label>
                    <textarea
                      className={`${fieldBase} min-h-[140px] resize-y`}
                      placeholder="Beskriv henvendelsen i moderat detaljnivå."
                      value={form.message}
                      onChange={(e) =>
                       setForm((f) => ({ ...f, type: e.target.value as InquiryType }))
                      }
                    />
                    <p className="text-xs text-neutral-500">
                      Merknad: Innsendt melding kan bli vurdert, arkivert eller
                      foreløpig ignorert.
                    </p>
                  </div>

                  <label className="flex items-start gap-2 text-sm text-neutral-700">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, consent: e.target.checked }))
                      }
                      className="mt-1 h-4 w-4 rounded border-neutral-300"
                    />
                    Jeg aksepterer at henvendelsen kan lagres for saksbehandling
                    (foreløpig).
                  </label>

                  {localError && (
                    <div className="rounded-xl border border-neutral-200 bg-white p-3 text-sm text-neutral-800">
                      Avvik: <span className="font-medium">{localError}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
                    >
                      Send henvendelse
                    </button>

                    <p className="text-xs text-neutral-500">
                      Referanse:{" "}
                      <span className="font-medium text-neutral-800">
                        {ref === "—" ? "Opprettes..." : ref}
                      </span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Card>

          <Card title="Saksbehandling" meta="Utdrag">
            Saksbehandling kan forekomme. Eventuell behandling kan være veiledende
            og ikke bindende.
          </Card>

          <Card title="Supplerende materiale" meta="Til orientering">
            <div className="space-y-2 text-sm">
              <p className="text-neutral-700">
                Gjeldene dokumenter kan konsulteres ved behov.
              </p>
              <Link
                href="/supplerende-materiale"
                className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500"
              >
                Åpne samleside
              </Link>
            </div>
          </Card>
        </div>
      </Page>
    </SiteShell>
  );
}
