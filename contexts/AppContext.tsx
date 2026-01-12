
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { Theme, ViewMode, AppContextType, ToastMessage } from '../types';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(Theme.Dark);
    const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Simple);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [toast, setToast] = useState<ToastMessage | null>(null);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
    }, []);

    const toggleViewMode = useCallback(() => {
        setViewMode(prevMode => (prevMode === ViewMode.Simple ? ViewMode.Pro : ViewMode.Simple));
    }, []);

    const login = useCallback(() => setIsAuthenticated(true), []);
    const logout = useCallback(() => setIsAuthenticated(false), []);

    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen(prev => !prev);
    }, []);

    const showToast = useCallback((toastMessage: ToastMessage) => {
        setToast(toastMessage);
        setTimeout(() => setToast(null), 3000);
    }, []);

    const value = {
        theme,
        toggleTheme,
        viewMode,
        toggleViewMode,
        isAuthenticated,
        login,
        logout,
        isSidebarOpen,
        toggleSidebar,
        toast,
        showToast,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
