import type { Resource } from "../types/Resource";

// Responsible for filtering the resources using the title and the tags.
export function filterResources(
  resources: Resource[],
  filter: string
): Resource[] {
  if (resources.length === 0) return [];
  const search = filter.toLowerCase();

  return resources.filter(
    (resource: Resource) =>
      resource.title.toLowerCase().includes(search) || // Match by title name
      resource.tags.some((tag) => tag.toLowerCase().includes(search)) // Ot match by tag
  );
}
