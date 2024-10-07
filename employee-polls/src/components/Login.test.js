import React from "react";
import { render, waitFor, fireEvent, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/index";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
  jest.clearAllTimers();
});

test('log in and arrive at home page', async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  await waitFor(() => {
    const state = store.getState();
    expect(state.users).toBeTruthy();
    expect(Object.keys(state.users).length).toBeGreaterThan(0);
    expect(state.questions).toBeTruthy();
    expect(Object.keys(state.questions).length).toBeGreaterThan(0);
  }, { timeout: 5000 });

  await waitFor(() => {
    expect(screen.getByText(/Select a user.../i)).toBeInTheDocument();
  });

  const dropdown = screen.getByRole("combobox");
  expect(dropdown).toBeInTheDocument();

  expect(store.getState().authedUser).toBe(null);

  const user = Object.values(store.getState().users)[0];
  fireEvent.change(dropdown, { target: { value: user.id } });

  await waitFor(() => {
    expect(store.getState().authedUser).toBe(user.id);
  });

  expect(screen).toMatchSnapshot();
})
