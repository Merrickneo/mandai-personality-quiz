export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prepends the deploy-time base path to a root-relative asset path.
// Needed for any raw string path (e.g. CSS background-image url()) that
// doesn't go through next/image, next/link, or next/font — those get
// basePath applied automatically, this doesn't.
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
