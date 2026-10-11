export type Stat = {
  id: string;
  kind: "public" | "survey"; // decides the icon (bank or clipboard)
  text: string;
  source: string;
  date: string;
};

export const stats: Stat[] = [
  {
    id: "ffs-fire-cause",
    kind: "public",
    text: "Gas leakages is #2 causes of Fire & Explosions in Nigeria.",
    source: "Federal Fire Service (FFS)",
    date: "2025",
  },
  {
    id: "ffs-losses",
    kind: "public",
    text: "Nigeria Loses N3.2tn, 388 Lives To Fire Outbreaks In Five Years",
    source: "Federal Fire Service (FFS)",
    date: "2025",
  },
  {
    id: "survey-fear",
    kind: "survey",
    text: "64% of gas users have direct experience with gas leak. Which makes them fear gas more.",
    source: "EnTech survey",
    date: "2026",
  },
  {
    id: "survey-tracking",
    kind: "survey",
    text: "97% of households users have no reliable way to track their gas levels. Which makes them rely on Guessworks",
    source: "EnTech survey",
    date: "2026",
  },
  {
    id: "survey-less-gas",
    kind: "survey",
    text: "70% of gas users suspect they receive less gas than they paid for.",
    source: "EnTech survey",
    date: "2026",
  },
];
