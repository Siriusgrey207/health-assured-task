import { type SubmitEvent, useState } from "react";
import { Title, Panel, Paragraph } from "../atoms";

// Sorting options for the resources
const sortingOptions: string[] = ["newest", "oldest"];

export default function Filters() {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  // Handles the submission of the form and updated the query parameters.
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const queryParams = new URLSearchParams({ search: search, sort: sort });
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
          <label htmlFor="sort">Sort</label>
          <select
            name="sort"
            id="sort"
            onChange={(event) => setSort(event.target.value)}
            value={sort}
          >
            {sortingOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        {/* Searching */}
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
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
