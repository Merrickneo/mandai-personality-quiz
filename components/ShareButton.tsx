"use client";

import { useState, type RefObject } from "react";

export default function ShareButton({
  targetRef,
  animalId,
  shareText,
}: {
  targetRef: RefObject<HTMLElement | null>;
  animalId: string;
  shareText: string;
}) {
  const [status, setStatus] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (!targetRef.current) return;
    setIsSharing(true);
    setStatus(null);

    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(targetRef.current, { pixelRatio: 2 });
      const url = window.location.href;

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `mandai-${animalId}.png`, {
        type: "image/png",
      });

      if (
        typeof navigator.canShare === "function" &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          files: [file],
          title: "Mandai Personality Quiz",
          text: shareText,
          url,
        });
      } else {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `mandai-${animalId}.png`;
        link.click();

        if (navigator.clipboard) {
          await navigator.clipboard.writeText(url);
          setStatus("Image saved & link copied!");
        } else {
          setStatus("Image saved!");
        }
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        // user cancelled the native share sheet — not an error
      } else {
        setStatus("Couldn't share — please try again.");
      }
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleShare}
        disabled={isSharing}
        className="rounded-full border border-sand/40 px-6 py-3 font-display text-sm font-semibold text-sand transition hover:border-sand hover:bg-sand hover:text-jungle-deep disabled:opacity-60"
      >
        {isSharing ? "Preparing..." : "Share your result"}
      </button>
      {status && <p className="text-xs text-ink-muted">{status}</p>}
    </div>
  );
}
