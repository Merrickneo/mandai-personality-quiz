import { OTTER } from "@/data/otter";
import type { Animal } from "@/lib/types";

/**
 * Temporary stub: always resolves to Otter, regardless of answers.
 * Replace with the trait-vector matcher described in docs/PRD-TD.md §5.2
 * once the full 25-animal roster and scoring rubric are available.
 */
export function matchAnimal(_answers: Record<string, string>): Animal {
  return OTTER;
}
