export type Unit = {
  slug: string;
  name: string;
  type: "Utvalg" | "Komité" | "Arbeidsgruppe" | "Referansegruppe";
  mandate: string;
  status: string;
  notes?: string[];
  lastReviewed?: string; // valgfritt
};

export const UNITS: Unit[] = [
  {
    slug: "utvalg-for-tempoavklaring-uta",
    type: "Utvalg",
    name: "Utvalg for Tempoavklaring (UTA)",
    mandate:
      "Vurdere, avklare og ved behov justere forståelsen av hva som til enhver tid kan anses som moderat tempo.",
    status: "Pågående vurdering.",
    lastReviewed: "2026-01-14",
    notes: [
      "Tempo forstås som situasjonsavhengig.",
      "Eventuelle presiseringer vurderes ved anledning.",
    ],
  },
  {
    slug: "komite-for-forventningsjustering-kof",
    type: "Komité",
    name: "Komité for Forventningsjustering (KOF)",
    mandate:
      "Foreslå nødvendige justeringer i forventningen før, under og etter mulige turer.",
    status: "Arbeider kontinuerlig.",
    lastReviewed: "2026-01-14",
    notes: ["Justering kan finne sted uten at tur gjennomføres."],
  },
  {
    slug: "arbeidsgruppe-for-rolighetsniva-agr",
    type: "Arbeidsgruppe",
    name: "Arbeidsgruppe for Rolighetsnivå (AGR)",
    mandate:
      "Sikre at ro opprettholdes i planleggingsfase og ved eventuell gjennomføring.",
    status: "Leveranser ikke fastsatt.",
    notes: ["Ro vurderes som overordnet hensyn."],
  },
  {
    slug: "underutvalg-for-pauser-og-avbrekk-upa",
    type: "Utvalg",
    name: "Underutvalg for Pauser og Avbrekk (UPA)",
    mandate:
      "Vurdere behov for pauser, herunder hyppighet, lengde og tidspunkt.",
    status: "Pauser anses som relevante.",
    notes: ["Pauser kan også benyttes preventivt."],
  },
  {
    slug: "komite-for-ytre-forhold-kyf",
    type: "Komité",
    name: "Komité for Ytre Forhold (KYF)",
    mandate:
      "Følge med på vær, føre, dagsform og øvrige forhold som kan påvirke forventningen.",
    status: "Løpende observasjon.",
    notes: ["Foreningen tar høyde for skiftende forutsetninger."],
  },
  {
    slug: "referansegruppe-for-personlig-opplevelse-rpo",
    type: "Referansegruppe",
    name: "Referansegruppe for Personlig Opplevelse (RPO)",
    mandate:
      "Ivareta subjektive erfaringer knyttet til tempo, ro og opplevd moderasjon.",
    status: "Sammensetning varierer.",
    notes: ["Opplevelser tillegges vekt innenfor rimelighetens grenser."],
  },
  {
    slug: "midlertidig-utvalg-for-videre-struktur-muvs",
    type: "Utvalg",
    name: "Midlertidig Utvalg for Videre Struktur (MUVS)",
    mandate:
      "Vurdere behovet for ytterligere utvalg og komiteer, herunder strukturendringer.",
    status: "Midlertidig (forlenget).",
    notes: ["Mandat fornyes ved behov."],
  },
];
