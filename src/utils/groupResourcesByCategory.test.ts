import { type Resource } from "../types/Resource";
import { describe, expect, it } from "vitest";
import { groupResourcesByCategory } from "./groupResourcesByCategory";

describe("Group fetched resourced by category", () => {
  it("Provided no resources, returns an empty record.", () => {
    const result = groupResourcesByCategory(emptyListOfResources);
    expect(result).toEqual({});
  });

  it("Groups resources by category.", () => {
    const result = groupResourcesByCategory(resources);
    expect(result).toEqual({
      Podcasts: [resources[0], resources[1], resources[2]],
      Articles: [resources[3]],
    });
  });
});

// ---
// Testing data for our unit test:
// ---
const emptyListOfResources: Resource[] = [];

const resources: Resource[] = [
  {
    id: "001",
    category: "Podcasts",
    title: "Newest Podcast",
    thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
    tags: ["wellbeing", "mindfulness", "relaxation"],
    duration: 25,
    description:
      "A calming podcast focused on mindfulness techniques for daily life.",
    date_uploaded: "2026-07-10",
  },
  {
    id: "002",
    category: "Podcasts",
    title: "Calm Moments",
    thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
    tags: ["mindfulness", "relaxation"],
    duration: 25,
    description:
      "A calming podcast focused on mindfulness techniques for daily life.",
    date_uploaded: "2025-07-11",
  },
  {
    id: "003",
    category: "Podcasts",
    title: "Oldest Podcast",
    thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
    tags: ["mindfulness"],
    duration: 25,
    description:
      "A calming podcast focused on mindfulness techniques for daily life.",
    date_uploaded: "2025-07-10",
  },
  {
    id: "004",
    category: "Articles",
    title: "The Science of Sleep",
    thumbnail: "https://www.datocms-assets.com/93767/1751891809-photo.jpg",
    tags: ["wellbeing", "sleep", "science"],
    duration: 8,
    description:
      "Explore the latest research on how sleep affects mental and physical health.",
    date_uploaded: "2025-06-22",
  },
];
