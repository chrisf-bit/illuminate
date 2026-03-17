import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppPhase, AssessmentResult } from "@/types";
import { AppShell } from "@/components/layout/AppShell";
import { WelcomePage } from "@/components/welcome/WelcomePage";
import { HowItWorks } from "@/components/welcome/HowItWorks";
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow";
import { ResultsPage } from "@/components/results/ResultsPage";
import { ExplorerLayout } from "@/components/explorer/ExplorerLayout";
import { useAssessment } from "@/hooks/useAssessment";
import { saveResults, loadResults } from "@/lib/storage";

function App() {
  const existingResults = loadResults();
  const [phase, setPhase] = useState<AppPhase>("welcome");
  const [result, setResult] = useState<AssessmentResult | null>(existingResults);
  const assessment = useAssessment();

  const handleStart = useCallback(() => {
    setPhase("howItWorks");
  }, []);

  const handleViewResults = useCallback(() => {
    if (result) {
      setPhase("results");
    }
  }, [result]);

  const handleBeginAssessment = useCallback(() => {
    setPhase("assessment");
  }, []);

  const handleAssessmentComplete = useCallback(() => {
    const scores = assessment.complete();
    setResult(scores);
    saveResults(scores);
    setPhase("results");
  }, [assessment]);

  const handleExplore = useCallback(() => {
    setPhase("explorer");
  }, []);

  const handleRetake = useCallback(() => {
    setPhase("welcome");
  }, []);

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          className="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {phase === "welcome" && (
            <WelcomePage
              onStart={handleStart}
              hasExistingResults={!!existingResults}
              onViewResults={handleViewResults}
            />
          )}

          {phase === "howItWorks" && (
            <HowItWorks
              onBegin={handleBeginAssessment}
              onBack={() => setPhase("welcome")}
            />
          )}

          {phase === "assessment" && (
            <AssessmentFlow
              assessment={assessment}
              onComplete={handleAssessmentComplete}
              onBack={() => setPhase("howItWorks")}
            />
          )}

          {phase === "results" && result && (
            <ResultsPage result={result} onExplore={handleExplore} />
          )}

          {phase === "explorer" && result && (
            <ExplorerLayout result={result} onRetake={handleRetake} />
          )}
        </motion.div>
      </AnimatePresence>
    </AppShell>
  );
}

export default App;
