import type { Animal } from "@/lib/types";

// Placeholder content, general public knowledge about otters — not
// Mandai-specific copy. Replace once the real 25-animal roster and fact
// sheets land (see docs/PRD-TD.md §5, §7).
export const OTTER: Animal = {
  id: "otter",
  name: "Otter",
  tagline: "Playful, social, and always up for an adventure with the group.",
  image: "/animals/otter.jpg",
  funFacts: [
    "Otters often hold paws while sleeping so they don't drift apart in the water.",
    "A group of otters is called a ‘raft’.",
    "Otters use rocks and other objects as tools to crack open shellfish.",
    "Sea otters have the densest fur of any animal — up to a million hairs per square inch.",
    "Otter pups can't swim at birth — they float like corks until their mother teaches them.",
    "Smooth-coated otters are local celebrities in Singapore, with families roaming the rivers and reservoirs around Mandai.",
  ],
  traits: [
    {
      trait: "Playful",
      blurb:
        "Otters turn everyday moments — a muddy bank, a floating leaf — into a game. You probably find joy in life's small moments too.",
    },
    {
      trait: "Social",
      blurb:
        "Otters raft up in groups and look out for each other. You likely thrive when you're around good company.",
    },
    {
      trait: "Curious",
      blurb:
        "Otters investigate everything with their paws before deciding what to do with it. You're the type to ask ‘why’ and dig a little deeper.",
    },
    {
      trait: "Resourceful",
      blurb:
        "Otters are one of the few animals known to use tools, cracking shells with rocks. You tend to find a clever way through, even under pressure.",
    },
    {
      trait: "Affectionate",
      blurb:
        "Otters hold onto each other so they don't drift apart while they sleep. You probably put real effort into staying close to the people who matter.",
    },
  ],
};
