
import React from 'react';
import { DollarSign, AlertTriangle, TrendingUp, UserCheck } from 'lucide-react';
import Card from '../components/ui/Card';
import { useAppContext } from '../contexts/AppContext';
import { ViewMode } from '../types';
import Terminal from './Terminal';

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; change?: string; changeType?: 'up' | 'down' }> = ({ icon, title, value, change, changeType }) => (
    <Card>
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-brand-blue/10 text-brand-blue mr-4">{icon}</div>
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">{value}</p>
            </div>
        </div>
        {change && (
            <div className={`mt-2 text-sm flex items-center ${changeType === 'up' ? 'text-brand-green' : 'text-brand-red'}`}>
                {change} vs last month
            </div>
        )}
    </Card>
);

const Dashboard: React.FC = () => {
    const { viewMode } = useAppContext();
    
    if (viewMode === ViewMode.Pro) {
      return (
        <div className="h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                <div className="h-full">
                    <Terminal />
                </div>
                <div className="h-full">
                    <Terminal />
                </div>
            </div>
        </div>
      );
    }

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<DollarSign />} title="Account Balance" value="$10,430.50" change="+12.5%" changeType="up" />
                <StatCard icon={<TrendingUp />} title="Today's P/L" value="$215.73" change="+5.2%" changeType="up" />
                <StatCard icon={<AlertTriangle />} title="Active Risk Alerts" value="3" />
                <StatCard icon={<UserCheck />} title="AI Signal Accuracy" value="89.2%" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card title="Recent Activity" className="lg:col-span-2">
                    <p className="text-gray-600 dark:text-gray-400">Activity feed placeholder...</p>
                </Card>
                <Card title="Portfolio Allocation">
                    <p className="text-gray-600 dark:text-gray-400">Chart placeholder...</p>
                </Card>
            </div>
             <Card title="AI Quick Trade Signal">
                <Terminal />
             </Card>
        </div>
    );
};

export default Dashboard;
