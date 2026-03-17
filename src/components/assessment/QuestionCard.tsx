import type { Question, PreferenceType } from "@/types";
import { StatementTile } from "./StatementTile";

interface QuestionCardProps {
  question: Question;
  rankings: Partial<Record<PreferenceType, 1 | 2 | 3 | 4>>;
  onSetRanking: (type: PreferenceType, rank: 1 | 2 | 3 | 4) => void;
}

export function QuestionCard({ question, rankings, onSetRanking }: QuestionCardProps) {
  const usedRanks = new Set(Object.values(rankings) as number[]);

  return (
    <div className="flex flex-col gap-2.5">
      {question.statements.map((stmt) => (
        <StatementTile
          key={stmt.type}
          label={stmt.label}
          text={stmt.text}
          type={stmt.type}
          rank={rankings[stmt.type] ?? null}
          onSelectRank={(rank) => onSetRanking(stmt.type, rank)}
          usedRanks={usedRanks}
        />
      ))}
    </div>
  );
}
