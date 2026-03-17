import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { AssessmentResult } from "@/types";
import { TYPE_META } from "@/lib/constants";
import { ScoreChart } from "./ScoreChart";

interface ResultsPageProps {
  result: AssessmentResult;
  onExplore: () => void;
}

export function ResultsPage({ result, onExplore }: ResultsPageProps) {
  return (
    <div className="h-full flex flex-col px-6 pb-6">
      {/* Header */}
      <motion.div
        className="pt-6 pb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-brand-teal mb-1">
          Your Results
        </h1>
        <div className="h-0.5 w-12 bg-brand-teal" />
      </motion.div>

      {/* Dominant preferences */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xs text-brand-grey-light uppercase tracking-wider mb-2">
          Your dominant preferences
        </p>
        <div className="flex gap-3">
          {result.dominant.slice(0, 2).map((type) => {
            const meta = TYPE_META[type];
            return (
              <div
                key={type}
                className="flex-1 rounded-lg overflow-hidden border border-brand-teal/30"
              >
                <img
                  src={meta.image}
                  alt={meta.label}
                  className="w-full h-20 object-cover"
                />
                <div className="px-3 py-2 bg-brand-grey-dark/20">
                  <span
                    className="text-sm font-bold"
                    style={{ color: meta.colour }}
                  >
                    {meta.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Score chart */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-brand-grey-light uppercase tracking-wider mb-3">
          Full breakdown
        </p>
        <ScoreChart scores={result.scores} dominant={result.dominant} />
        <p className="text-xs text-brand-grey-light/50 text-center mt-3">
          Total score: 100 - Range per type: 10-40
        </p>
      </motion.div>

      {/* CTA */}
      <motion.button
        onClick={onExplore}
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-teal text-brand-black font-semibold text-base rounded-lg active:scale-[0.98] transition-transform mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Explore Your Profile
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
}
