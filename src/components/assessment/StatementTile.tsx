import { motion } from "framer-motion";
import type { PreferenceType } from "@/types";

interface StatementTileProps {
  label: string;
  text: string;
  type: PreferenceType;
  rank: 1 | 2 | 3 | 4 | null;
  onSelectRank: (rank: 1 | 2 | 3 | 4) => void;
  usedRanks: Set<number>;
}

const RANKS: (1 | 2 | 3 | 4)[] = [4, 3, 2, 1];

export function StatementTile({
  label,
  text,
  rank,
  onSelectRank,
  usedRanks,
}: StatementTileProps) {
  return (
    <div
      className={`rounded-lg border px-3 py-2.5 transition-colors ${
        rank
          ? "border-brand-teal/50 bg-brand-teal/5"
          : "border-brand-white/15 bg-brand-white/5"
      }`}
    >
      <div className="flex items-start gap-2.5 mb-2">
        {/* Rank badge */}
        <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
          {rank ? (
            <motion.div
              key={rank}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="w-7 h-7 rounded-full bg-brand-teal text-brand-black text-sm font-bold flex items-center justify-center"
            >
              {rank}
            </motion.div>
          ) : (
            <div className="w-7 h-7 rounded-full border border-brand-white/25 text-brand-white/50 text-xs font-medium flex items-center justify-center">
              {label}
            </div>
          )}
        </div>

        {/* Statement text */}
        <p className="text-sm text-brand-white/90 leading-snug flex-1 pt-0.5">
          {text}
        </p>
      </div>

      {/* Rank buttons */}
      <div className="flex gap-2 ml-9">
        {RANKS.map((r) => {
          const isSelected = rank === r;
          const isUsedElsewhere = !isSelected && usedRanks.has(r);

          return (
            <button
              key={r}
              onClick={() => onSelectRank(r)}
              className={`w-9 h-7 rounded text-xs font-semibold transition-all active:scale-95 ${
                isSelected
                  ? "bg-brand-teal text-brand-black"
                  : isUsedElsewhere
                    ? "border border-brand-white/15 text-brand-white/30"
                    : "border border-brand-white/25 text-brand-white/70 hover:border-brand-teal/50"
              }`}
            >
              {r}
            </button>
          );
        })}
      </div>
    </div>
  );
}
