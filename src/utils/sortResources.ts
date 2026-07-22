import { type Resource } from "../types/Resource";

type SortBy = "newest" | "oldest";

// The following function sorts a list of resources based on date (newest first or oldest first)
// resources - The list of resources to be sorted.
// sortBy    - The sorting parameter.
export function sortResources(
  resources: Resource[],
  sortBy: SortBy = "newest"
): Resource[] {
  if (resources.length === 0) return [];

  // Create a copy of the resouces list to prevent direct mutation of the original array.
  const resourcesCopy = Array.from(resources).sort((a, b) => {
    const aTime = new Date(a.date_uploaded).getTime();
    const bTime = new Date(b.date_uploaded).getTime();

    // Use the Date to sort the resources.
    return sortBy === "newest" ? bTime - aTime : aTime - bTime;
  });

  return resourcesCopy;
}
