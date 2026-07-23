import rawResourcesJson from "../../src/data/resources.json";
import type { Resource } from "../types/Resource";

// The following file contains a function that simulates the fetching of resources from an external API.
const resources = rawResourcesJson as Resource[];
const delayMs: number = 1000;
const shouldFail = false; // When set to true it always triggers the error state.

export default function fetchResources(
  triggerError = shouldFail
): Promise<Resource[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate fetching failure.
      if (triggerError) {
        reject(new Error("Failed to fetch resources."));
        return;
      }

      resolve(resources);
    }, delayMs);
  });
}
