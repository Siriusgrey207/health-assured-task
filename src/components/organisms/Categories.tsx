import type { Resource } from "../../types/Resource";
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
    const errorMessage =
      error instanceof Error ? error.message : "There was an error";
    return (
      <section data-testid="error-container">
        <h6>{errorMessage}</h6>
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
    <section data-testid="categories-container block">
      {Object.entries(categories).map(([categoryName, resources]) => (
        <div
          key={categoryName}
          className="category grid grid-cols-3 gap-4 not-first:mt-7"
        >
          <div className="category-title col-span-3">{categoryName}</div>

          {resources.map((resource: Resource) => {
            return (
              <div
                key={resource.id}
                className="resource bg-primary-background rounded-xl overflow-hidden shadow-md"
              >
                <img src={resource.thumbnail} alt={resource.title} />
                <div className="py-3 px-4">
                  <h6 className="text-lg">{resource.title}</h6>
                  <div className="flex items-start justify-start gap-1 mt-3">
                    {resource.tags
                      .slice(0, 3)
                      .map((tag: string, index: number) => (
                        <span
                          key={tag + index}
                          className="bg-[#e4e4e4] text-muted text-xs rounded-lg px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <span className="block mt-2 text-[14px]">
                    {resource.duration} minutes
                  </span>
                  <span className="block mt-1 text-xs">
                    {resource.date_uploaded}
                  </span>
                  <button
                    type="button"
                    className="btn btn--green mt-2"
                    onClick={() =>
                      alert(
                        "Further work could include the development of this modal."
                      )
                    }
                  >
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
