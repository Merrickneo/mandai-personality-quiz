import type { Question } from "@/lib/types";

// Placeholder question set — generic personality-quiz copy, not final
// Mandai content. Replace once the real 12 questions land (see
// docs/PRD-TD.md §5, §7). Scoring is currently stubbed to always resolve
// to Otter (lib/matchAnimal.ts), so these answers don't affect the result
// yet — they're here to exercise the real quiz flow end to end.
export const questions: Question[] = [
  {
    id: "q1",
    prompt: "It's a free Saturday morning. What are you doing?",
    answers: [
      { id: "a", text: "Rounding up friends for an outdoor adventure" },
      { id: "b", text: "Quiet coffee and a book, thanks" },
    ],
  },
  {
    id: "q2",
    prompt: "Your ideal weekend getaway is...",
    answers: [
      { id: "a", text: "A bustling new city to explore" },
      { id: "b", text: "A quiet cabin, far from everyone" },
    ],
  },
  {
    id: "q3",
    prompt: "At a party, you're most likely...",
    answers: [
      { id: "a", text: "In the middle of the group, cracking jokes" },
      { id: "b", text: "Chatting one-on-one in a corner" },
    ],
  },
  {
    id: "q4",
    prompt: "When facing a tricky problem, you...",
    answers: [
      { id: "a", text: "Jump in and figure it out as you go" },
      { id: "b", text: "Plan every step before moving" },
    ],
  },
  {
    id: "q5",
    prompt: "Your friends would describe you as...",
    answers: [
      { id: "a", text: "The bold one" },
      { id: "b", text: "The thoughtful one" },
    ],
  },
  {
    id: "q6",
    prompt: "You just found a hidden path in the forest. What next?",
    answers: [
      { id: "a", text: "Follow it immediately — adventure awaits!" },
      { id: "b", text: "Check a map first, just in case" },
    ],
  },
  {
    id: "q7",
    prompt: "Working in a team, you naturally...",
    answers: [
      { id: "a", text: "Take the lead" },
      { id: "b", text: "Support quietly from the side" },
    ],
  },
  {
    id: "q8",
    prompt: "Your ideal pace of life is...",
    answers: [
      { id: "a", text: "Fast and full of variety" },
      { id: "b", text: "Steady and predictable" },
    ],
  },
  {
    id: "q9",
    prompt: "Something unexpected just happened. Your first reaction?",
    answers: [
      { id: "a", text: "Get excited — this is interesting!" },
      { id: "b", text: "Get cautious — let's assess first" },
    ],
  },
  {
    id: "q10",
    prompt: "You prefer spending your free time...",
    answers: [
      { id: "a", text: "Surrounded by people" },
      { id: "b", text: "In your own space" },
    ],
  },
  {
    id: "q11",
    prompt: "Your approach to rules is...",
    answers: [
      { id: "a", text: "Bend them if it makes sense" },
      { id: "b", text: "Respect the structure" },
    ],
  },
  {
    id: "q12",
    prompt: "If you were an animal for a day, you'd want to...",
    answers: [
      { id: "a", text: "Roam far and wide" },
      { id: "b", text: "Stick close to home turf" },
    ],
  },
];
