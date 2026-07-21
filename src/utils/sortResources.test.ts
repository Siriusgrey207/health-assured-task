import { type Resource } from "../types/Resource";
import { describe, expect, it } from "vitest";
import { sortResources } from "./sortResources";

describe("Provided a list of resources, sort them by date", () => {
  it("Provided an empty list, empty list should be returned.", () => {
    const emptyResourcesList = sortResources([], "newest");
    expect(emptyResourcesList).toEqual([]);
  });

  it("Sort the list of resources by newest first", () => {
    const sortedResources = sortResources(mockResourceList, "newest");
    expect(sortedResources).toEqual([
      mockResourceList[0],
      mockResourceList[2],
      mockResourceList[1],
    ]);
  });

  it("Sort the list of resources by oldest first", () => {
    const sortedResources = sortResources(mockResourceList, "oldest");
    expect(sortedResources).toEqual([
      mockResourceList[1],
      mockResourceList[2],
      mockResourceList[0],
    ]);
  });
});

// ---
// Mock Resource List
// ---

const mockResourceList: Resource[] = [
  {
    id: "001",
    category: "Podcasts",
    title: "Newest resource",
    thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
    tags: ["wellbeing"],
    duration: 20,
    description:
      "A calming podcast focused on mindfulness techniques for daily life.",
    date_uploaded: "2026-07-05",
  },
  {
    id: "004",
    category: "Podcasts",
    title: "Oldest resource",
    thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
    tags: ["calmness"],
    duration: 30,
    description:
      "A calming podcast focused on mindfulness techniques for daily life.",
    date_uploaded: "2026-07-03",
  },
  {
    id: "003",
    category: "Podcasts",
    title: "Second-newest resource",
    thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
    tags: ["mindfulness"],
    duration: 25,
    description:
      "A calming podcast focused on mindfulness techniques for daily life.",
    date_uploaded: "2026-07-04",
  },
];
