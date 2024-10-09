// src/setupTests.js

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Suppress specific React warnings
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`/.test(
        args[0]
      )
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
