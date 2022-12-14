import { createContext } from 'react';

export const AppContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  modalToggle: () => {},
});
