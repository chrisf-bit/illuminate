import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PreferenceType } from "@/types";
import { worksheetContent } from "@/data/worksheets";
import { TYPE_META, PREFERENCE_ORDER } from "@/lib/constants";

interface PracticeSectionProps {
  dominant: PreferenceType[];
}

const CONTEXTS = ["selling", "service", "leadership"] as const;
type Context = (typeof CONTEXTS)[number];

const CONTEXT_LABELS: Record<Context, string> = {
  selling: "Selling",
  service: "Service",
  leadership: "Leadership",
};

export function PracticeSection({ dominant }: PracticeSectionProps) {
  const [context, setContext] = useState<Context>("selling");
  const [selectedType, setSelectedType] = useState<PreferenceType>(
    dominant[0] ?? "generator"
  );

  const tips = worksheetContent[selectedType][context];
  const meta = TYPE_META[selectedType];

  return (
    <div className="h-full flex flex-col px-1">
      {/* Context tabs */}
      <div className="flex gap-1 mb-3">
        {CONTEXTS.map((c) => (
          <button
            key={c}
            onClick={() => setContext(c)}
            className={`flex-1 text-xs py-1.5 rounded-lg font-medium transition-colors ${
              c === context
                ? "bg-brand-teal text-brand-white"
                : "text-brand-white border border-brand-white/25"
            }`}
          >
            {CONTEXT_LABELS[c]}
          </button>
        ))}
      </div>

      {/* Type selector */}
      <div className="flex gap-1.5 mb-3">
        {PREFERENCE_ORDER.map((type) => {
          const m = TYPE_META[type];
          const isActive = type === selectedType;
          return (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`flex-1 text-[11px] py-1 rounded font-medium transition-colors ${
                isActive
                  ? "bg-brand-teal text-brand-white"
                  : "text-brand-white border border-brand-white/25"
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Tips */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${context}-${selectedType}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 overflow-hidden"
        >
          <p className="text-xs text-brand-white/50 mb-2">
            When {context === "selling" ? "selling to" : context === "service" ? "serving" : "leading"} a{" "}
            <span style={{ color: meta.colour }} className="font-semibold">
              {meta.label}
            </span>
            :
          </p>
          <ul className="space-y-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-brand-grey-light">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: meta.colour }}
                />
                {tip}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
