import { useState, useCallback } from "react";
import type { PreferenceType, QuestionAnswer, AssessmentResult } from "@/types";
import { questions } from "@/data/questions";
import { calculateScores } from "@/lib/scoring";

type PartialRankings = Partial<Record<PreferenceType, 1 | 2 | 3 | 4>>;

export function useAssessment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<PartialRankings[]>(
    () => questions.map(() => ({}))
  );
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const currentQuestion = questions[currentIndex];
  const currentRankings = answers[currentIndex];

  const isQuestionComplete =
    Object.keys(currentRankings).length === 4;

  const setRanking = useCallback(
    (type: PreferenceType, rank: 1 | 2 | 3 | 4) => {
      setAnswers((prev) => {
        const updated = [...prev];
        const current = { ...updated[currentIndex] };

        // Remove this rank from any other type (swap logic)
        for (const key of Object.keys(current) as PreferenceType[]) {
          if (current[key] === rank) {
            delete current[key];
          }
        }

        // Assign rank to the selected type
        current[type] = rank;
        updated[currentIndex] = current;
        return updated;
      });
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex]);

  const goBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);

  const complete = useCallback(() => {
    const fullAnswers: QuestionAnswer[] = answers.map((rankings, i) => ({
      questionId: questions[i].id,
      rankings: rankings as Record<PreferenceType, 1 | 2 | 3 | 4>,
    }));
    const scores = calculateScores(fullAnswers);
    setResult(scores);
    return scores;
  }, [answers]);

  const allComplete = answers.every(
    (a) => Object.keys(a).length === 4
  );

  return {
    currentIndex,
    currentQuestion,
    currentRankings,
    isQuestionComplete,
    totalQuestions: questions.length,
    setRanking,
    goNext,
    goBack,
    complete,
    result,
    setResult,
    allComplete,
    isLastQuestion: currentIndex === questions.length - 1,
  };
}
