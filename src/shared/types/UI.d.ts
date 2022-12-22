import { ReactNode } from 'react';

export type TErrorModal = {
  error: string | null;
  onClear: () => void;
};

export type TMap = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

export interface IModal {
  show: boolean;
  children: ReactNode;
  contentClass?: string;
  footer: ReactNode;
  footerClass?: string;
  header?: string;
  headerClass?: string;
  onCancel: () => void;
  onSubmit?: () => void;
}
