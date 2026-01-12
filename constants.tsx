
import React from 'react';
import { LayoutDashboard, BarChart3, Bot, PieChart, GraduationCap, Icon } from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
    { path: '/dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/terminal', name: 'Terminal', icon: <BarChart3 size={20} /> },
    { path: '/auto-bot', name: 'AutoBot', icon: <Bot size={20} /> },
    { path: '/analytics', name: 'Analytics', icon: <PieChart size={20} /> },
    { path: '/academy', name: 'Academy', icon: <GraduationCap size={20} /> },
];
