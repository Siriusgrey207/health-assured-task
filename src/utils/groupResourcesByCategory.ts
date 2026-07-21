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

// const mockResource: Resource = {
//   id: "001",
//   category: "Podcasts",
//   title: "Mindful Moments",
//   thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
//   tags: ["wellbeing", "mindfulness", "relaxation"],
//   duration: 25,
//   description:
//     "A calming podcast focused on mindfulness techniques for daily life.",
//   date_uploaded: "2025-07-10",
// };
// return { Podcasts: [mockResource] };
