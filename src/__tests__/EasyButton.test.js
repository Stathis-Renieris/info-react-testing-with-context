// testing with context and a custom render method

import * as React from "react";
// We import everything we need from a custom helper file that imports react testing library and overrides render() function
import { render, screen } from "../utils/test-utils";
import EasyButton from "../components/EasyButton";

test("renders with the light styles for the light theme", () => {
  render(<EasyButton>Easy</EasyButton>);

  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `);
});
