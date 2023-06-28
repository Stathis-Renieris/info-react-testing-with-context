# Testing components that are dependent on context

Sometimes components are dependent on some context in order to function well. This is the case with our EasyButton component, the functionality of which we want to test.

For this reason, we created a utility function that overrides `render` from `@testing-library/react`:

```javascript
// test-utils.js
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "../components/theme";

function render(ui, { theme = "light", ...options } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
// override React Testing Library's render with our own
export { render };
```

Then we can use this extended `render` function to test a particular component:

```javascript
// EasyButton.test.js
// testing with context and a custom render method

import * as React from "react";
// We import everything we need from a custom helper file that
// imports react testing library and overrides render() function
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
```

To run the test in your terminal use `npm test`
