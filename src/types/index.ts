export type PreferenceType = "generator" | "reflector" | "connector" | "ignitor";

export interface Statement {
  type: PreferenceType;
  label: string;
  text: string;
}

export interface Question {
  id: number;
  statements: [Statement, Statement, Statement, Statement];
}

export interface QuestionAnswer {
  questionId: number;
  rankings: Record<PreferenceType, 1 | 2 | 3 | 4>;
}

export interface AssessmentResult {
  scores: Record<PreferenceType, number>;
  dominant: PreferenceType[];
  completedAt: string;
  answers: QuestionAnswer[];
}

export interface PreferenceProfile {
  type: PreferenceType;
  label: string;
  colour: string;
  image: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
}

export type AppPhase = "welcome" | "howItWorks" | "assessment" | "results" | "explorer";

export type ExplorerTab = "home" | "profiles" | "cues" | "practice" | "notes";
