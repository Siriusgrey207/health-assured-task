import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Categories from "./Categories";

describe("Tests for the Categories component", () => {
  it("Replace the categories loading spinner with six categories", async () => {
    // Initially expect the spinner to be present.
    render(<Categories />);
    expect(screen.getByTestId("spinner-container")).toBeInTheDocument();

    // Later we expect the spinner to disappear.
    const categoriesContainer = await screen.findByTestId(
      "categories-container",
    );
    expect(screen.queryByTestId("spinner-container")).not.toBeInTheDocument();
    expect(within(categoriesContainer).getAllByTestId("category")).toHaveLength(
      6,
    );
  });
});
