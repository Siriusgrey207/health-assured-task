import rawResourcesJson from "../../src/data/resources.json";
import type { Resource } from "../types/Resource";

// The following file contains a function that simulates the fetching of resources from an external API.
const resources = rawResourcesJson as Resource[];
const delayMs: number = 1500;

export default function fetchResources(): Promise<Resource[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resources);
    }, delayMs);
  });
}
