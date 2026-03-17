import type { PreferenceType } from "@/types";

interface WorksheetTips {
  selling: string[];
  service: string[];
  leadership: string[];
}

export const worksheetContent: Record<PreferenceType, WorksheetTips> = {
  generator: {
    selling: [
      "Get to the point quickly - they value directness",
      "Focus on results, outcomes and ROI",
      "Present clear options with a recommended choice",
      "Be confident and match their pace",
      "Avoid excessive detail - give the headlines",
      "Show how your solution helps them win",
    ],
    service: [
      "Be efficient and respectful of their time",
      "Provide clear, concise answers",
      "Offer solutions, not problems",
      "Match their direct communication style",
      "Follow up promptly with actions taken",
      "Let them feel in control of the process",
    ],
    leadership: [
      "Give them clear goals and the autonomy to achieve them",
      "Recognise their results and competitive nature",
      "Be direct with feedback - they respect honesty",
      "Provide challenging opportunities to keep them engaged",
      "Help them develop patience with different working styles",
      "Channel their drive to motivate the wider team",
    ],
  },
  reflector: {
    selling: [
      "Come prepared with data, evidence and case studies",
      "Allow time for them to process and consider",
      "Be logical and structured in your approach",
      "Provide detailed written information to review",
      "Do not pressure for an immediate decision",
      "Answer questions thoroughly and accurately",
    ],
    service: [
      "Provide detailed, accurate information",
      "Follow established processes consistently",
      "Back up your recommendations with evidence",
      "Give them time to evaluate options",
      "Communicate clearly and without ambiguity",
      "Document everything and follow up in writing",
    ],
    leadership: [
      "Provide clear processes and structured frameworks",
      "Give them autonomy to work at their own pace",
      "Share data and rationale behind decisions",
      "Respect their need for time to think before responding",
      "Appreciate their thoroughness and attention to detail",
      "Help them be more comfortable with ambiguity",
    ],
  },
  connector: {
    selling: [
      "Build a genuine relationship first",
      "Take time to understand their needs personally",
      "Be warm, friendly and authentic",
      "Include testimonials and peer recommendations",
      "Show how your solution benefits their team",
      "Be patient and let trust develop naturally",
    ],
    service: [
      "Be warm and personable in your approach",
      "Take time to listen to their concerns fully",
      "Show genuine care about their experience",
      "Include them in decisions that affect them",
      "Check in regularly to maintain the relationship",
      "Use collaborative language - 'we' and 'together'",
    ],
    leadership: [
      "Create a supportive, collaborative team environment",
      "Acknowledge their contributions to team harmony",
      "Be sensitive when delivering difficult feedback",
      "Involve them in decisions that affect the team",
      "Help them build confidence in their own abilities",
      "Encourage them to share their opinions more assertively",
    ],
  },
  ignitor: {
    selling: [
      "Be enthusiastic and match their energy",
      "Paint the big picture and exciting possibilities",
      "Keep things fresh and engaging - avoid repetition",
      "Use visuals and stories rather than dense data",
      "Give them creative input into the solution",
      "Keep momentum high throughout the conversation",
    ],
    service: [
      "Be upbeat, positive and energetic",
      "Keep interactions dynamic and engaging",
      "Offer innovative solutions and fresh ideas",
      "Avoid bogging them down in detail",
      "Show excitement about helping them",
      "Follow up with something visual or creative",
    ],
    leadership: [
      "Give them variety and creative challenges",
      "Celebrate their ideas and contributions publicly",
      "Help them focus without crushing their creativity",
      "Pair them with detail-oriented team members",
      "Keep meetings energetic and collaborative",
      "Channel their optimism to inspire the wider team",
    ],
  },
};
