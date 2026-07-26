import type { Question } from "@/lib/types";

export default function QuizScreen({
  question,
  index,
  total,
  onAnswer,
}: {
  question: Question;
  index: number;
  total: number;
  onAnswer: (answerId: "a" | "b") => void;
}) {
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-ink-muted">
          <span>
            Question {index + 1} of {total}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-jungle-mid">
          <div
            className="h-full rounded-full bg-sunset transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="mt-8 font-display text-2xl font-semibold text-balance text-sand sm:text-3xl">
          {question.prompt}
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => onAnswer(answer.id)}
              className="rounded-2xl border border-jungle-line bg-jungle-mid px-5 py-4 text-left text-sand transition hover:border-leaf hover:bg-jungle-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
