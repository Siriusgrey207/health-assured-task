import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Categories from "./Categories";

describe("Tests for the Categories component", () => {
  it("As the page is loading, a loading spinner should be displayed while the categories are being fetched.", () => {
    render(<Categories />);
    expect(screen.getByTestId("spinner-container")).toBeDefined();
  });
});
