"use client";

import { useEffect, useState } from "react";

export default function DidYouKnowBubble({ facts }: { facts: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (facts.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % facts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [facts.length]);

  const goTo = (next: number) => {
    setIndex((next + facts.length) % facts.length);
  };

  return (
    <div className="relative rounded-3xl rounded-bl-sm bg-sand px-5 py-4 text-jungle-deep shadow-lg">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-sunset">
        Did you know?
      </span>
      <p key={index} className="mt-1 text-sm leading-relaxed sm:text-base">
        {facts[index]}
      </p>

      {facts.length > 1 && (
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {facts.map((_, i) => (
              <button
                key={i}
                aria-label={`Show fact ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 w-4 rounded-full transition ${
                  i === index ? "bg-sunset" : "bg-jungle-deep/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(index + 1)}
            className="text-xs font-semibold text-sunset hover:text-jungle-deep"
          >
            Next fact →
          </button>
        </div>
      )}

      {/* speech-bubble tail */}
      <span className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-sand" />
    </div>
  );
}
