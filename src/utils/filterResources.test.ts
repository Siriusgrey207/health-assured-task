import { type Resource } from "../types/Resource";
import { describe, expect, it } from "vitest";
import { filterResources } from "../utils/filterResources";

describe("Provided a list of resources and a filter string, filter the resources based on the title and tags.", () => {
  it("Provided an empty list of resources, an empty list should be returned.", () => {
    const res = filterResources("relax", []);
    expect(res.length).toBe(0);
  });

  it("Filter resources by title", () => {
    const res = filterResources("daily", mockResourceList);
    expect(res.length).toBe(1);
    expect(res).toEqual([mockResourceList[0]]);
  });

  it("Filter resources by tags", () => {
    const res = filterResources("testTag", mockResourceList);
    expect(res.length).toBe(2);
    expect(res).toEqual([mockResourceList[1], mockResourceList[2]]);
  });
});

// ---
// Mock Resource List
// ---
const mockResourceList: Resource[] = [
  {
    id: "001",
    category: "Podcasts",
    title: "Daily life mindfulness techniques",
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
    tags: ["testTag"],
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
    tags: ["testTag"],
    duration: 25,
    description:
      "A calming podcast focused on mindfulness techniques for daily life.",
    date_uploaded: "2026-07-04",
  },
];
