import type { NextConfig } from "next";

// Set GITHUB_PAGES=true only in the GitHub Pages deploy workflow (see
// .github/workflows/nextjs.yml). Keeps `npm run dev` and any future
// Vercel deployment (see docs/PRD-TD.md §8.7) served from the domain
// root — only the GitHub Pages project site needs the /repo-name prefix.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/mandai-personality-quiz" : "";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    images: { unoptimized: true },
  }),
  basePath,
  env: {
    // Read by lib/basePath.ts so raw asset paths (e.g. the otter photo,
    // referenced as a plain CSS background-image url) resolve correctly
    // under the GitHub Pages subpath too — Next only auto-rewrites paths
    // that go through next/image, next/link, next/font, or metadata.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
