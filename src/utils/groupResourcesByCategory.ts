import type { Resource } from "../types/Resource";

// The function responsible to group the received resources by category.

export function groupResourcesByCategory(
  resources: Resource[],
): Record<string, Resource[]> {
  // If resources are provided, and empty record should be returned.
  if (resources.length === 0) return {};

  // Otherwise group the resourced by category and return.
  const groupedResources: Record<string, Resource[]> = {};
  resources.forEach((resource) => {
    const categoryName: string = resource.category;
    if (!groupedResources[categoryName]) {
      groupedResources[categoryName] = [];
    }
    groupedResources[categoryName].push(resource);
  });

  return groupedResources;
}
