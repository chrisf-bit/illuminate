import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = ((current + 1) / total) * 100;

  return (
    <div className="w-full px-4 pt-3 pb-1">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium text-brand-grey-light">
          Question {current + 1} of {total}
        </span>
      </div>
      <div className="h-1 w-full bg-brand-grey-dark/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-teal rounded-full"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
