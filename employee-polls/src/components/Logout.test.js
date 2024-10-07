import React from 'react';
import {
  render,
  waitFor,
  fireEvent,
  screen,
  cleanup,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store/index';
import App from './App';

afterEach(() => {
  cleanup();
  jest.clearAllTimers();
});

test('renders login drop down', async () => {
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
    expect(state.questions).toBeTruthy();
  },
  { timeout: 5000 }
  );

  await waitFor(() => {
    expect(screen.getByText(/Select a user.../i)).toBeInTheDocument();
  });

  const dropdown = screen.getByRole('combobox');
  const users = Object.values(store.getState().users);
  const user = users[0];
  fireEvent.change(dropdown, { target: { value: user.id } });

  await waitFor(() => {
    expect(store.getState().authedUser).toBe(user.id);
  });

  const leaderboardLink = screen.getByRole('link', { name: /Leaderboard/i });
  await fireEvent.click(leaderboardLink);

  const leaderboardText = screen.getAllByText(/Leaderboard/i);
  expect(leaderboardText.length).toEqual(2);
  expect(screen.getAllByText(user.name).length).toEqual(2);

  users.filter((u) => u.name !== user.name).forEach((u) => {
    const elements = screen.getAllByText(u.name);
    expect(elements.length).toBeGreaterThan(0);
  });

  const logoutButton = screen.getByText('Log Out');
  await fireEvent.click(logoutButton);

  await waitFor(
    () => {
      const state = store.getState();
      expect(state.users).toBeTruthy();
      expect(Object.keys(state.users).length).toBeGreaterThan(0);
      expect(state.questions).toBeTruthy();
      expect(Object.keys(state.questions).length).toBeGreaterThan(0);
      expect(state.authedUser).toBeFalsy();
      expect(state.authedUser).toEqual(null);
      expect(screen.getByText(/Select a user.../i)).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});
