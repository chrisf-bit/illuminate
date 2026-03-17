import type { PreferenceProfile } from "@/types";

export const profiles: PreferenceProfile[] = [
  {
    type: "generator",
    label: "Generator",
    colour: "#01A0B6",
    image: "/images/generator.jpg",
    description:
      "Generators are confident, outspoken and clear about what they want. They are focused on achieving measurable outcomes and go all out to get the job done. They are quick decision makers, risk takers and love a challenge. Goal oriented, they'll be interested in results and are excellent at galvanising others to deliver against a target.",
    traits: [
      "Confident and direct",
      "Results-driven",
      "Quick decision maker",
      "Risk taker",
      "Goal oriented",
      "Competitive",
    ],
    strengths: [
      "Decisive and action-oriented",
      "Excellent at setting and hitting targets",
      "Strong at galvanising others to deliver",
      "Thrives under pressure and challenge",
      "Clear communicator who gets to the point",
    ],
    challenges: [
      "Can come across as impatient or blunt",
      "May overlook others' feelings",
      "Sets high standards that can feel demanding",
      "Loses interest without a clear goal",
      "May rush decisions without full information",
    ],
  },
  {
    type: "reflector",
    label: "Reflector",
    colour: "#15CBD9",
    image: "/images/reflector.jpg",
    description:
      "If you want a job done right, a Reflector is the person to ask. They are super organised and brilliant at designing and following processes that give them the outcome they expect. Detail focused, they like clear information and will seek out data to guide and validate their choices.",
    traits: [
      "Detail oriented",
      "Methodical and organised",
      "Data-driven decisions",
      "Process focused",
      "Autonomous worker",
      "Rational thinker",
    ],
    strengths: [
      "Thorough and accurate in their work",
      "Excellent at designing reliable processes",
      "Makes well-researched, rational decisions",
      "Consistent and dependable output",
      "Strong analytical and critical thinking",
    ],
    challenges: [
      "Can appear reserved or distant",
      "May take too long to make decisions",
      "Can struggle with ambiguity or rapid change",
      "May focus on detail at the expense of pace",
      "Finds overtly emotional people difficult",
    ],
  },
  {
    type: "connector",
    label: "Connector",
    colour: "#D10980",
    image: "/images/connector.jpg",
    description:
      "Connectors have a very strong empathy streak, they look out for others and seek to build good relationships with the people around them. Always friendly and loyal, they enjoy initiating conversations and love building a sense of camaraderie with people who share their values.",
    traits: [
      "Empathetic and caring",
      "Relationship builder",
      "Loyal and trustworthy",
      "Team oriented",
      "Supportive of others",
      "Values-driven",
    ],
    strengths: [
      "Builds strong, lasting relationships",
      "Creates trust and psychological safety",
      "Excellent listener and collaborator",
      "Brings people together as a team",
      "Sensitive to others' needs and feelings",
    ],
    challenges: [
      "May avoid conflict or difficult conversations",
      "Can be less confident in asserting own views",
      "May prioritise harmony over results",
      "Can struggle with people who lack empathy",
      "Sometimes relies on others to drive outcomes",
    ],
  },
  {
    type: "ignitor",
    label: "Ignitor",
    colour: "#15CBD9",
    image: "/images/ignitor.jpg",
    description:
      "Ignitors carry an overflowing cup. They are energetic, look for positives and can see the silver lining in almost every situation. They love throwing ideas around and use lateral thinking to move things on to the next stage. Typically visual thinkers, they 'get' the big picture and are always happy to be involved in new things with endless possibilities.",
    traits: [
      "Energetic and positive",
      "Creative thinker",
      "Big picture focus",
      "Spontaneous",
      "Inspiring to others",
      "Optimistic outlook",
    ],
    strengths: [
      "Brings energy and positivity to any situation",
      "Excellent at generating creative ideas",
      "Sees possibilities others might miss",
      "Inspires and motivates team members",
      "Thrives on innovation and new challenges",
    ],
    challenges: [
      "Can be easily distracted or lose focus",
      "May struggle with detail and follow-through",
      "Planning and organisation are not strong suits",
      "Disengages when momentum wanes",
      "Can overwhelm others with too many ideas",
    ],
  },
];
