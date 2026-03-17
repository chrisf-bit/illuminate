import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PreferenceProfile } from "@/types";

interface ProfileCardProps {
  profile: PreferenceProfile;
  isDominant: boolean;
}

export function ProfileCard({ profile, isDominant }: ProfileCardProps) {
  const [page, setPage] = useState(0);
  const pages = ["Overview", "Strengths", "Challenges"];

  return (
    <div className="h-full flex flex-col">
      {/* Image header */}
      <div className="relative h-28 flex-shrink-0 overflow-hidden rounded-t-lg">
        <img
          src={profile.image}
          alt={profile.label}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-2 left-3 flex items-center gap-2">
          <h3
            className="text-lg font-bold"
            style={{ color: profile.colour }}
          >
            {profile.label}
          </h3>
          {isDominant && (
            <span className="text-[10px] uppercase tracking-wider bg-brand-teal/20 text-brand-teal px-2 py-0.5 rounded-full font-semibold">
              Dominant
            </span>
          )}
        </div>
      </div>

      {/* Page content */}
      <div className="flex-1 px-3 py-3 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {page === 0 && (
              <div>
                <p className="text-sm text-brand-grey-light leading-relaxed mb-3">
                  {profile.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {profile.traits.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full border border-brand-white/20 text-brand-grey-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {page === 1 && (
              <ul className="space-y-2">
                {profile.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-brand-grey-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
            {page === 2 && (
              <ul className="space-y-2">
                {profile.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-brand-grey-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-1.5 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page nav */}
      <div className="flex items-center justify-between px-3 pb-2">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="p-1 text-brand-grey-light disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5">
          {pages.map((label, i) => (
            <button
              key={label}
              onClick={() => setPage(i)}
              className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
                i === page
                  ? "bg-brand-teal text-brand-white"
                  : "text-brand-white/70 border border-brand-white/25"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
          disabled={page === pages.length - 1}
          className="p-1 text-brand-grey-light disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
