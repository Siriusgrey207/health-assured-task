import type { Resource } from "../../types/Resource";
import { useState, useEffect } from "react";
import { useResources } from "../../hooks/useResources";
import { groupResourcesByCategory } from "../../utils/groupResourcesByCategory";

export default function Categories() {
  const { isLoading, error, isError, data: resources } = useResources();

  // After resources have been fetched, they need to be grouped by categories and sorted.
  const categories = resources ? groupResourcesByCategory(resources) : {};

  if (isLoading) {
    return (
      <section>
        <div data-testid="spinner-container">Loading...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section data-testid="error-container">
        <h6>There was an error</h6>
      </section>
    );
  }

  if (Object.keys(categories).length === 0) {
    return (
      <section data-testid="no-categories-container">
        No categories to display
      </section>
    );
  }

  return (
    <section data-testid="categories-container">
      {Object.entries(categories).map(([categoryName, resources]) => (
        <div key={categoryName}>
          <div className="my-5 bg-red-500">{categoryName}</div>

          {resources.map((resource: Resource) => (
            <div key={resource.id} className="resource bg-green-400">
              {resource.title}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
