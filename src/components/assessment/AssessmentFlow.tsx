import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { QuestionCard } from "./QuestionCard";
import type { useAssessment } from "@/hooks/useAssessment";

type AssessmentState = ReturnType<typeof useAssessment>;

interface AssessmentFlowProps {
  assessment: AssessmentState;
  onComplete: () => void;
  onBack: () => void;
}

export function AssessmentFlow({ assessment, onComplete, onBack }: AssessmentFlowProps) {
  const {
    currentIndex,
    currentQuestion,
    currentRankings,
    isQuestionComplete,
    totalQuestions,
    setRanking,
    goNext,
    goBack,
    isLastQuestion,
  } = assessment;

  const handleNext = () => {
    if (isLastQuestion && isQuestionComplete) {
      onComplete();
    } else if (isQuestionComplete) {
      goNext();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <ProgressBar current={currentIndex} total={totalQuestions} />

      {/* Navigation header */}
      <div className="px-4 py-2 flex items-center justify-between">
        <button
          onClick={currentIndex === 0 ? onBack : goBack}
          className="p-1.5 rounded-lg text-brand-grey-light active:bg-brand-grey-dark/30 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-lg font-bold text-brand-teal">
          Question {currentIndex + 1}
        </h2>
        <div className="w-8" />
      </div>

      {/* Question content */}
      <div className="flex-1 px-4 overflow-hidden flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            <QuestionCard
              question={currentQuestion}
              rankings={currentRankings}
              onSetRanking={setRanking}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom button */}
      <div className="px-4 pb-6 pt-3">
        <button
          onClick={handleNext}
          disabled={!isQuestionComplete}
          className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-semibold text-base transition-all active:scale-[0.98] ${
            isQuestionComplete
              ? "bg-brand-teal text-brand-black"
              : "bg-brand-white/10 text-brand-white/30 cursor-not-allowed"
          }`}
        >
          {isLastQuestion ? (
            <>
              See Results
              <Check size={18} />
            </>
          ) : (
            <>
              Next
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
