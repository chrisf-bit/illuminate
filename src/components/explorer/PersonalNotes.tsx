import { useState, useEffect, useRef, useCallback } from "react";
import { TYPE_META } from "@/lib/constants";
import { loadNotes, saveNotes } from "@/lib/storage";
import type { StoredNotes } from "@/lib/storage";

type NoteTab = keyof StoredNotes;

const TABS: { key: NoteTab; label: string }[] = [
  { key: "general", label: "General" },
  { key: "generator", label: "Generator" },
  { key: "reflector", label: "Reflector" },
  { key: "connector", label: "Connector" },
  { key: "ignitor", label: "Ignitor" },
];

export function PersonalNotes() {
  const [notes, setNotes] = useState<StoredNotes>(loadNotes);
  const [activeTab, setActiveTab] = useState<NoteTab>("general");
  const saveTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const debouncedSave = useCallback((updated: StoredNotes) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveNotes(updated), 500);
  }, []);

  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, []);

  const handleChange = (value: string) => {
    const updated = { ...notes, [activeTab]: value };
    setNotes(updated);
    debouncedSave(updated);
  };

  const tabMeta = activeTab === "general" ? null : TYPE_META[activeTab as keyof typeof TYPE_META];

  return (
    <div className="h-full flex flex-col px-1">
      {/* Tab bar */}
      <div className="flex gap-1 mb-3 overflow-x-auto">
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-[11px] px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-brand-teal text-brand-white"
                  : "text-brand-white border border-brand-white/25"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Text area */}
      <textarea
        value={notes[activeTab]}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={`Your ${activeTab === "general" ? "personal" : tabMeta?.label} notes...`}
        className="flex-1 w-full bg-brand-white/5 border border-brand-white/20 rounded-lg p-3 text-sm text-brand-white placeholder:text-brand-white/30 resize-none focus:outline-none focus:border-brand-teal/50 transition-colors"
      />

      <p className="text-[10px] text-brand-white/40 mt-1.5 text-center">
        Notes are saved automatically to this device
      </p>
    </div>
  );
}
