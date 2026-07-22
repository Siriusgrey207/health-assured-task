import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Categories from "./Categories";

// Mock of the hook for the resources still being loaded.
vi.mock("../../hooks/useResources", () => ({
  useResources: () => ({
    isLoading: true,
    isError: false,
    error: null,
    data: [],
  }),
}));

describe("Category component test - loading resources", () => {
  it("The loading spinner should be rendered before the resources are fetched.", () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    expect(screen.getByTestId("spinner-container")).toBeInTheDocument();
    expect(
      screen.queryByTestId("categories-container")
    ).not.toBeInTheDocument();
  });
});
