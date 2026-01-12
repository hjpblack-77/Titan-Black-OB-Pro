
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants';

const BottomBar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-secondary border-t border-gray-200 dark:border-dark-accent flex justify-around items-center h-16 z-50">
            {NAV_ITEMS.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                            isActive ? 'text-brand-blue' : 'text-gray-500 dark:text-gray-400'
                        }`}
                    >
                        {item.icon}
                        <span className="text-xs mt-1">{item.name}</span>
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default BottomBar;
