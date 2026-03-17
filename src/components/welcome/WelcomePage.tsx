import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WelcomePageProps {
  onStart: () => void;
  hasExistingResults: boolean;
  onViewResults: () => void;
}

export function WelcomePage({ onStart, hasExistingResults, onViewResults }: WelcomePageProps) {
  return (
    <div className="h-full w-full relative flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/welcome.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 pb-8">
        {/* Logo */}
        <motion.div
          className="pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/logo-whiteout-2x.png"
            alt="Elev-8 Performance"
            width={200}
            height={116}
            className="h-16 w-auto"
          />
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Title area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1
            className="text-5xl font-bold text-white leading-tight mb-2"
            style={{ textShadow: "0 0 12px rgba(1, 160, 182, 0.5), 0 0 4px rgba(255, 255, 255, 0.3)" }}
          >
            Illuminate
          </h1>
          <div
            className="h-0.5 w-16 bg-white mb-3"
            style={{ boxShadow: "0 0 8px rgba(1, 160, 182, 0.5), 0 0 3px rgba(255, 255, 255, 0.3)" }}
          />
          <p className="text-brand-grey-light text-base leading-relaxed max-w-xs">
            The Elev-8 behavioural preference tool. Discover your communication
            style and learn how to get the best from every conversation.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            onClick={onStart}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-teal text-brand-black font-semibold text-base rounded-lg active:scale-[0.98] transition-transform"
          >
            {hasExistingResults ? "Retake Assessment" : "Get Started"}
            <ArrowRight size={18} />
          </button>
          {hasExistingResults && (
            <button
              onClick={onViewResults}
              className="w-full py-3 border border-brand-teal text-brand-teal font-medium text-sm rounded-lg active:scale-[0.98] transition-transform"
            >
              View Previous Results
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
