import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface HowItWorksProps {
  onBegin: () => void;
  onBack: () => void;
}

const steps = [
  {
    icon: "/images/step-1.png",
    title: "Read the statements",
    description: "Each question has four statements about how you behave.",
  },
  {
    icon: "/images/step-2.png",
    title: "Rank them 4 to 1",
    description:
      "Give 4 to the statement most like you, down to 1 for the least. Each number can only be used once.",
  },
  {
    icon: "/images/step-3.png",
    title: "Discover your style",
    description:
      "Your scores reveal your dominant communication preferences across four behavioural types.",
  },
];

export function HowItWorks({ onBegin, onBack }: HowItWorksProps) {
  return (
    <div className="h-full w-full flex flex-col px-6 pb-6">
      {/* Header */}
      <div className="pt-6 pb-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1.5 rounded-lg text-brand-grey-light active:bg-brand-grey-dark/30 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold text-brand-teal">How it works</h2>
      </div>

      {/* Steps */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <img
              src={step.icon}
              alt=""
              className="w-12 h-12 flex-shrink-0"
            />
            <div>
              <h3 className="text-brand-white font-semibold text-base mb-0.5">
                {step.title}
              </h3>
              <p className="text-brand-grey-light text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tip */}
      <motion.p
        className="text-xs text-brand-grey-light/70 text-center mb-4 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Go with your gut feeling - there are no right or wrong answers.
      </motion.p>

      {/* CTA */}
      <motion.button
        onClick={onBegin}
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-teal text-brand-black font-semibold text-base rounded-lg active:scale-[0.98] transition-transform"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Begin Assessment
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
}
