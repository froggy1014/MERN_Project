import { createContext } from 'react';

export type TCtx = {
  isLoggedIn: boolean;
  userId: string | null;
  token: string | null;
  login: (uid: string, accessToken: string, expirationDate: Date) => void;
  logout: () => void;
  modalToggle: (contents: string) => void;
};

export const AppContext = createContext<TCtx>({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => undefined,
  logout: () => undefined,
  modalToggle: () => undefined,
});
