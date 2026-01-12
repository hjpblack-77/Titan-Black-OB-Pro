
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import { useAppContext } from '../../contexts/AppContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isSidebarOpen } = useAppContext();

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-dark-primary text-gray-800 dark:text-gray-200">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-dark-primary p-4 md:p-6 lg:p-8">
                    {children}
                </main>
                <BottomBar />
            </div>
        </div>
    );
};

export default Layout;
