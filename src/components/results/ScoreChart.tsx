import { motion } from "framer-motion";
import type { PreferenceType } from "@/types";
import { TYPE_META, PREFERENCE_ORDER } from "@/lib/constants";

interface ScoreChartProps {
  scores: Record<PreferenceType, number>;
  dominant: PreferenceType[];
}

export function ScoreChart({ scores, dominant }: ScoreChartProps) {
  return (
    <div className="flex flex-col gap-3">
      {PREFERENCE_ORDER.map((type, i) => {
        const meta = TYPE_META[type];
        const score = scores[type];
        const pct = (score / 40) * 100;
        const isDominant = dominant.includes(type);

        return (
          <div key={type}>
            <div className="flex items-center justify-between mb-1">
              <span
                className={`text-sm font-semibold ${isDominant ? "text-brand-teal" : "text-brand-grey-light"}`}
              >
                {meta.label}
              </span>
              <span
                className={`text-sm font-bold ${isDominant ? "text-brand-teal" : "text-brand-grey-light"}`}
              >
                {score}
              </span>
            </div>
            <div className="h-3 w-full bg-brand-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: isDominant ? meta.colour : "#475059",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
