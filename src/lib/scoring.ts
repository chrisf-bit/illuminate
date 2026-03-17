import type { PreferenceType, QuestionAnswer, AssessmentResult } from "@/types";
import { PREFERENCE_ORDER } from "./constants";

export function calculateScores(answers: QuestionAnswer[]): AssessmentResult {
  const scores: Record<PreferenceType, number> = {
    generator: 0,
    reflector: 0,
    connector: 0,
    ignitor: 0,
  };

  for (const answer of answers) {
    scores.generator += answer.rankings.generator;
    scores.reflector += answer.rankings.reflector;
    scores.connector += answer.rankings.connector;
    scores.ignitor += answer.rankings.ignitor;
  }

  const sorted = PREFERENCE_ORDER.slice().sort(
    (a, b) => scores[b] - scores[a]
  );

  // Find dominant: top 2, but include ties
  const topScore = scores[sorted[0]];
  const secondScore = scores[sorted[1]];
  const dominant = sorted.filter(
    (t) => scores[t] === topScore || scores[t] === secondScore
  );

  return {
    scores,
    dominant,
    completedAt: new Date().toISOString(),
    answers,
  };
}
