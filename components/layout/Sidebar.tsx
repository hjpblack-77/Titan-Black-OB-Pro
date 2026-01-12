
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronsLeft, ChevronsRight, LogOut } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';
import { NAV_ITEMS } from '../../constants';
import { NavItem } from '../../types';

const Sidebar: React.FC = () => {
    const { isSidebarOpen, toggleSidebar, logout } = useAppContext();
    const location = useLocation();

    const NavItemLink: React.FC<{ item: NavItem }> = ({ item }) => {
        const isActive = location.pathname.startsWith(item.path);
        return (
            <NavLink
                to={item.path}
                className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
                    isActive
                        ? 'bg-brand-blue text-white'
                        : 'text-gray-400 hover:bg-dark-accent hover:text-white'
                }`}
            >
                {item.icon}
                <span className={`ml-4 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {item.name}
                </span>
            </NavLink>
        );
    };

    return (
        <aside
            className={`hidden md:flex flex-col bg-dark-secondary text-white transition-all duration-300 ease-in-out ${
                isSidebarOpen ? 'w-64' : 'w-20'
            }`}
        >
            <div className="flex items-center justify-between p-4 border-b border-dark-accent h-16">
                 <img src="https://picsum.photos/40/40" alt="Logo" className={`rounded-full transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} />
                <h1 className={`text-xl font-bold whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                    Titan Pro
                </h1>
                <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-dark-accent">
                    {isSidebarOpen ? <ChevronsLeft /> : <ChevronsRight />}
                </button>
            </div>
            <nav className="flex-1 px-4 py-4">
                {NAV_ITEMS.map((item) => (
                    <NavItemLink key={item.path} item={item} />
                ))}
            </nav>
            <div className="p-4 border-t border-dark-accent">
                <button
                    onClick={logout}
                    className="flex items-center p-3 w-full rounded-lg text-gray-400 hover:bg-brand-red hover:text-white"
                >
                    <LogOut size={20} />
                    <span className={`ml-4 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                        Logout
                    </span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
