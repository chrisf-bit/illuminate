import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, MessageSquare, Briefcase, StickyNote, RotateCcw } from "lucide-react";
import type { AssessmentResult, ExplorerTab, PreferenceType } from "@/types";
import { TYPE_META } from "@/lib/constants";
import { ScoreChart } from "@/components/results/ScoreChart";
import { profiles } from "@/data/profiles";
import { PREFERENCE_ORDER } from "@/lib/constants";
import { ProfileCard } from "./ProfileCard";
import { ConversationCues } from "./ConversationCues";
import { PracticeSection } from "./PracticeSection";
import { PersonalNotes } from "./PersonalNotes";

interface ExplorerLayoutProps {
  result: AssessmentResult;
  onRetake: () => void;
}

const TABS: { key: ExplorerTab; label: string; icon: typeof User }[] = [
  { key: "home", label: "Home", icon: Home },
  { key: "profiles", label: "Profiles", icon: User },
  { key: "cues", label: "Cues", icon: MessageSquare },
  { key: "practice", label: "Practice", icon: Briefcase },
  { key: "notes", label: "Notes", icon: StickyNote },
];

export function ExplorerLayout({ result, onRetake }: ExplorerLayoutProps) {
  const [activeTab, setActiveTab] = useState<ExplorerTab>("home");
  const [profileIndex, setProfileIndex] = useState(0);

  const currentProfile = profiles.find(
    (p) => p.type === PREFERENCE_ORDER[profileIndex]
  )!;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h1
          className="text-xl font-bold text-white"
          style={{ textShadow: "0 0 10px rgba(1, 160, 182, 0.45), 0 0 3px rgba(255, 255, 255, 0.25)" }}
        >
          Illuminate
        </h1>
        <button
          onClick={onRetake}
          className="flex items-center gap-1 text-xs text-brand-white/60 active:text-brand-teal transition-colors"
        >
          <RotateCcw size={12} />
          Retake
        </button>
      </div>

      {/* Tab content */}
      <div className="flex-1 px-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeTab === "home" && (
              <div className="h-full flex flex-col">
                {/* Dominant preferences */}
                <p className="text-xs text-brand-white/50 uppercase tracking-wider mb-2">
                  Your dominant preferences
                </p>
                <div className="flex gap-3 mb-4">
                  {result.dominant.slice(0, 2).map((type) => {
                    const meta = TYPE_META[type];
                    return (
                      <div
                        key={type}
                        className="flex-1 rounded-lg overflow-hidden border border-brand-white/15"
                      >
                        <img
                          src={meta.image}
                          alt={meta.label}
                          className="w-full h-20 object-cover"
                        />
                        <div className="px-3 py-2">
                          <span
                            className="text-sm font-bold"
                            style={{ color: meta.colour }}
                          >
                            {meta.label}
                          </span>
                          <span className="text-xs text-brand-white/50 ml-2">
                            {result.scores[type]}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Full breakdown */}
                <p className="text-xs text-brand-white/50 uppercase tracking-wider mb-3">
                  Full breakdown
                </p>
                <ScoreChart scores={result.scores} dominant={result.dominant} />
                <p className="text-xs text-brand-white/30 text-center mt-3">
                  Total score: 100 - Range per type: 10-40
                </p>
              </div>
            )}

            {activeTab === "profiles" && (
              <div className="h-full flex flex-col">
                {/* Profile type selector */}
                <div className="flex gap-1.5 mb-2">
                  {PREFERENCE_ORDER.map((type, i) => {
                    const meta = profiles.find((p) => p.type === type)!;
                    const isActive = i === profileIndex;
                    return (
                      <button
                        key={type}
                        onClick={() => setProfileIndex(i)}
                        className={`flex-1 text-[11px] py-1 rounded font-medium transition-colors ${
                          isActive
                            ? "bg-brand-teal text-brand-white"
                            : "text-brand-white border border-brand-white/25"
                        }`}
                      >
                        {meta.label}
                      </button>
                    );
                  })}
                </div>
                <div className="flex-1 overflow-hidden rounded-lg border border-brand-white/15">
                  <ProfileCard
                    key={currentProfile.type}
                    profile={currentProfile}
                    isDominant={result.dominant.includes(currentProfile.type)}
                  />
                </div>
              </div>
            )}

            {activeTab === "cues" && (
              <ConversationCues dominant={result.dominant} />
            )}

            {activeTab === "practice" && (
              <PracticeSection dominant={result.dominant} />
            )}

            {activeTab === "notes" && <PersonalNotes />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom tab bar */}
      <div className="flex border-t border-brand-white/15 bg-brand-black">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.key === activeTab;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                isActive ? "text-brand-teal" : "text-brand-white/70"
              }`}
            >
              <Icon size={18} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
