import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { Filters } from "./index";

describe("Tests for the Filters component", () => {
  it("Upon page load, the search input is expected to be focused.", () => {
    render(
      <MemoryRouter>
        <Filters />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText("Relax");
    expect(document.activeElement).toBe(input);
  });
});

// To do, test the addition of the query params after click.
