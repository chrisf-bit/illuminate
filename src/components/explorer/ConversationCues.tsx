import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profiles } from "@/data/profiles";
import { TYPE_META } from "@/lib/constants";
import type { PreferenceType } from "@/types";

interface ConversationCuesProps {
  dominant: PreferenceType[];
}

export function ConversationCues({ dominant }: ConversationCuesProps) {
  const [selected, setSelected] = useState<PreferenceType | null>(null);

  if (selected) {
    const profile = profiles.find((p) => p.type === selected)!;
    const meta = TYPE_META[selected];

    return (
      <motion.div
        className="h-full flex flex-col px-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          onClick={() => setSelected(null)}
          className="text-xs text-brand-grey-light mb-3 text-left"
        >
          Back to all types
        </button>
        <h3 className="text-lg font-bold mb-3" style={{ color: meta.colour }}>
          {meta.label}
        </h3>
        <div className="flex-1 overflow-hidden">
          <p className="text-xs text-brand-teal uppercase tracking-wider mb-2 font-semibold">
            Strengths
          </p>
          <ul className="space-y-1.5 mb-4">
            {profile.strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-brand-grey-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <p className="text-xs text-brand-pink uppercase tracking-wider mb-2 font-semibold">
            Challenges
          </p>
          <ul className="space-y-1.5">
            {profile.challenges.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-brand-grey-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-1.5 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="h-full flex flex-col px-1">
      <p className="text-xs text-brand-grey-light mb-3">
        Tap a type to see their strengths and challenges.
      </p>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {profiles.map((profile) => {
          const meta = TYPE_META[profile.type];
          const isDominant = dominant.includes(profile.type);

          return (
            <button
              key={profile.type}
              onClick={() => setSelected(profile.type)}
              className={`rounded-lg overflow-hidden border text-left transition-colors ${
                isDominant
                  ? "border-brand-teal/40"
                  : "border-brand-white/20"
              }`}
            >
              <img
                src={meta.image}
                alt={meta.label}
                className="w-full h-16 object-cover"
              />
              <div className="px-2 py-1.5">
                <span
                  className="text-sm font-bold"
                  style={{ color: meta.colour }}
                >
                  {meta.label}
                </span>
                {isDominant && (
                  <span className="text-[8px] ml-1.5 uppercase text-brand-teal">
                    You
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
