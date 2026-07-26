"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { matchAnimal } from "@/lib/matchAnimal";
import LandingScreen from "./LandingScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";

type Stage = "landing" | "quiz" | "result";

export default function QuizApp() {
  const [stage, setStage] = useState<Stage>("landing");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleStart = () => {
    setAnswers({});
    setQuestionIndex(0);
    setStage("quiz");
  };

  const handleAnswer = (answerId: string) => {
    const question = questions[questionIndex];
    const nextAnswers = { ...answers, [question.id]: answerId };
    setAnswers(nextAnswers);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStage("result");
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setQuestionIndex(0);
    setStage("landing");
  };

  if (stage === "landing") return <LandingScreen onStart={handleStart} />;

  if (stage === "quiz")
    return (
      <QuizScreen
        question={questions[questionIndex]}
        index={questionIndex}
        total={questions.length}
        onAnswer={handleAnswer}
      />
    );

  return <ResultScreen animal={matchAnimal(answers)} onRetake={handleRetake} />;
}
