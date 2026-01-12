
import React from 'react';
import { Sun, Moon, User, Menu, Zap, Eye } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';
import ToggleSwitch from '../ui/ToggleSwitch';
import { ViewMode } from '../../types';

const Header: React.FC = () => {
    const { theme, toggleTheme, viewMode, toggleViewMode, toggleSidebar } = useAppContext();

    return (
        <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-dark-secondary border-b border-gray-200 dark:border-dark-accent">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="md:hidden p-2 mr-2 text-gray-500 dark:text-gray-400">
                    <Menu />
                </button>
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Welcome, Trader!
                </h1>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-dark-accent p-1 rounded-full">
                    <span className="text-sm font-medium px-2 text-gray-600 dark:text-gray-300 hidden sm:block">
                        {viewMode === ViewMode.Simple ? 'Simple' : 'Pro'} View
                    </span>
                     <ToggleSwitch
                        IconOn={<Zap size={16} />}
                        IconOff={<Eye size={16} />}
                        checked={viewMode === ViewMode.Pro}
                        onChange={toggleViewMode}
                    />
                </div>
                
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-accent"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                <div className="relative">
                    <button className="flex items-center space-x-2">
                        <img className="h-9 w-9 rounded-full object-cover" src="https://picsum.photos/100/100" alt="User" />
                        <div className="hidden md:block text-left">
                            <div className="text-sm font-medium text-gray-800 dark:text-white">John Doe</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Pro Trader</div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
