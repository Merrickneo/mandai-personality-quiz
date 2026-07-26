export interface AnimalTrait {
  trait: string;
  blurb: string;
}

export interface Animal {
  id: string;
  name: string;
  tagline: string;
  image: string;
  funFacts: string[];
  traits: AnimalTrait[];
}

export interface QuestionAnswer {
  id: "a" | "b";
  text: string;
}

export interface Question {
  id: string;
  prompt: string;
  answers: [QuestionAnswer, QuestionAnswer];
}
