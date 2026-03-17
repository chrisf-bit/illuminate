import type { PreferenceType } from "@/types";

export const BRAND = {
  teal: "#01A0B6",
  tealLight: "#15CBD9",
  tealDark: "#01606D",
  pink: "#D10980",
  black: "#000000",
  white: "#F2F2F2",
  greyLight: "#B2BFC5",
  greyDark: "#475059",
} as const;

export const TYPE_META: Record<
  PreferenceType,
  { label: string; colour: string; image: string; icon: string }
> = {
  generator: {
    label: "Generator",
    colour: BRAND.teal,
    image: "/images/generator.jpg",
    icon: "Zap",
  },
  reflector: {
    label: "Reflector",
    colour: BRAND.tealLight,
    image: "/images/reflector.jpg",
    icon: "Search",
  },
  connector: {
    label: "Connector",
    colour: BRAND.pink,
    image: "/images/connector.jpg",
    icon: "Heart",
  },
  ignitor: {
    label: "Ignitor",
    colour: BRAND.tealLight,
    image: "/images/ignitor.jpg",
    icon: "Sparkles",
  },
} as const;

export const PREFERENCE_ORDER: PreferenceType[] = [
  "generator",
  "reflector",
  "connector",
  "ignitor",
];

export const STORAGE_KEYS = {
  results: "illuminate-results",
  notes: "illuminate-notes",
} as const;
