import { type SubmitEvent, useState } from "react";
import { Title, Panel, Paragraph } from "../atoms";

type SortOption = {
  value: string;
  label: string;
};

const DEFAULT_SORT: string = "newest";
const sortingOptions: SortOption[] = [
  {
    value: DEFAULT_SORT,
    label: "Newest First",
  },
  {
    value: "oldest",
    label: "Oldest First",
  },
];

export default function Filters() {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>(DEFAULT_SORT);

  // Handles the submission of the form and updated the query parameters.
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    const trimmedSearch = search.trim();
    if (trimmedSearch !== "") {
      queryParams.set("search", trimmedSearch);
    }
    if (sort !== "") {
      queryParams.set("sort", sort);
    }

    // Update the history stack accordingly.
    if (queryParams.size == 0) return;
    window.history.pushState({}, "", "?" + queryParams.toString());
  }

  return (
    <Panel>
      <Title title="Health Assured Resources" />
      <Paragraph text="Your one stop for health assured curated resources." />

      {/* Form for searching and sorting the responses */}
      <form onSubmit={handleSubmit}>
        {/* Sorting */}
        <div className="form-group">
          <label htmlFor="sort-select">Sort</label>
          <select
            name="sort"
            id="sort-select"
            onChange={(event) => setSort(event.target.value)}
            value={sort}
          >
            {sortingOptions.map((option: SortOption) => {
              const { value, label } = option;
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>

        {/* Searching */}
        <div className="form-group">
          <label htmlFor="search-input">Search</label>
          <input
            autoFocus
            name="Search"
            id="search-input"
            type="text"
            placeholder="Relax"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
        </div>

        {/* Submission */}
        <button type="submit">Search</button>
      </form>
    </Panel>
  );
}
