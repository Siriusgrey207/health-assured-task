import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Filters from "./Filters";

describe("Tests for the Filters component", () => {
  it("Upon page load, the search input is expected to be focused.", () => {
    render(<Filters />);
    const input = screen.getByPlaceholderText("Relax");
    expect(document.activeElement).toBe(input);
  });
});
