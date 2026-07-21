import { type Resource } from "../types/Resource";

type SortBy = "newest" | "oldest";

// The following function sorts a list of resources based on date (newest first or oldest first)
// resources - The list of resources to be sorted.
// sortBy    - The sorting parameter.
export function sortResources(
  resources: Resource[],
  sortBy: SortBy,
): Resource[] {
  return [];
}
