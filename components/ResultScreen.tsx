"use client";

import { useRef } from "react";
import type { Animal } from "@/lib/types";
import { withBasePath } from "@/lib/basePath";
import DidYouKnowBubble from "./DidYouKnowBubble";
import ShareButton from "./ShareButton";

export default function ResultScreen({
  animal,
  onRetake,
}: {
  animal: Animal;
  onRetake: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16">
      <div
        ref={cardRef}
        className="relative w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl"
        style={{
          backgroundColor: "var(--jungle-mid)",
          backgroundImage: `linear-gradient(to top, rgba(10, 20, 14, 0.92) 0%, rgba(10, 20, 14, 0.45) 55%, rgba(10, 20, 14, 0.1) 100%), url(${withBasePath(animal.image)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-5 px-6 py-10 sm:px-8">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-leaf-light">
              You got
            </span>
            <h1 className="font-display text-4xl font-bold text-sand sm:text-5xl">
              {animal.name}
            </h1>
            <p className="mt-2 max-w-sm text-sand/90">{animal.tagline}</p>
          </div>

          <DidYouKnowBubble facts={animal.funFacts} />

          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-leaf-light">
              Traits you share
            </span>
            <ul className="mt-3 flex flex-col gap-2">
              {animal.traits.map((t) => (
                <li
                  key={t.trait}
                  className="rounded-xl bg-jungle-deep/60 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="font-display text-sm font-semibold text-sunset-light">
                    {t.trait}
                  </span>
                  <p className="mt-0.5 text-sm text-sand/85">{t.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <ShareButton
          targetRef={cardRef}
          animalId={animal.id}
          shareText={`I got ${animal.name} on the Mandai Personality Quiz!`}
        />
        <button
          onClick={onRetake}
          className="rounded-full bg-leaf px-6 py-3 font-display text-sm font-semibold text-jungle-deep transition hover:bg-leaf-light"
        >
          Retake the quiz
        </button>
      </div>
    </div>
  );
}
