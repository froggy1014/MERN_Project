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

export interface IInput {
  id: string;
  onInput: (id?: string, value?: string, isValid?: boolean) => void;
  type: string;
  rows: number | undefined;
  placeholder: string;
  label: string;
  errorText: string;
  initialValid: boolean;
  initialValue: string;
  validators: { type: string; val?: string }[];
  element: string;
}

export interface IState {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}
export interface IChangeAction {
  type: string;
  val: string;
  validators: { type: string; val?: string }[];
}

export interface ITouchAction {
  type: string;
}

export type TActions = IChangeAction | ITouchAction;
