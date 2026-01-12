
import { ReactNode } from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export enum ViewMode {
    Simple = 'simple',
    Pro = 'pro',
}

export interface NavItem {
    path: string;
    name: string;
    icon: ReactNode;
}

export interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export interface AppContextType {
    theme: Theme;
    toggleTheme: () => void;
    viewMode: ViewMode;
    toggleViewMode: () => void;
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    toast: ToastMessage | null;
    showToast: (toast: ToastMessage) => void;
}
