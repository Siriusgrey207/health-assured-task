import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Categories from "./Categories";
import rawResourceJson from "../../data/resources.json";
import type { Resource } from "../../types/Resource";

const mockResources = rawResourceJson as Resource[];

// Mock of the hook that represents the successfully-loaded resources.
vi.mock("../../hooks/useResources", () => ({
  useResources: () => ({
    isLoading: false,
    isError: false,
    error: null,
    data: mockResources,
  }),
}));

describe("Categories component test", () => {
  it("Categories should be rendered after resources are fetched.", () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    const categories = screen.getByTestId("categories-container");
    expect(within(categories).getAllByTestId("category")).toHaveLength(6);
    expect(screen.queryByTestId("spinner-container")).not.toBeInTheDocument();
  });
});
