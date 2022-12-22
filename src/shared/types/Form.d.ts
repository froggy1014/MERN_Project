import { ReactNode } from 'react';

export interface IButton {
  inverse: boolean;
  href: string;
  size: string;
  children: ReactNode;
  to: string;
  danger: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
  disabled: boolean;
}
