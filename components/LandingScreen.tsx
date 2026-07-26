export default function LandingScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <span className="font-display text-sm uppercase tracking-[0.2em] text-leaf-light">
        Mandai Personality Quiz
      </span>
      <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold text-balance text-sand sm:text-5xl">
        Which Mandai animal are you?
      </h1>
      <p className="mt-4 max-w-md text-base text-ink-muted sm:text-lg">
        Answer 12 quick questions and we&apos;ll match you to the wildlife
        character who shares your personality.
      </p>
      <button
        onClick={onStart}
        className="mt-10 rounded-full bg-leaf px-8 py-3 font-display text-lg font-semibold text-jungle-deep transition hover:bg-leaf-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
      >
        Start the quiz
      </button>
      <p className="mt-3 text-xs text-ink-muted">Takes about 2 minutes</p>
    </div>
  );
}
