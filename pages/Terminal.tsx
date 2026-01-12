
import React, { useState } from 'react';
import { ChevronDown, Search, ArrowUp, ArrowDown } from 'lucide-react';
import Card from '../components/ui/Card';
import CandlestickChart from '../components/charts/CandlestickChart';
import Gauge from '../components/charts/Gauge';
import { useAppContext } from '../contexts/AppContext';
import { ViewMode } from '../types';

const timeframes = ['5s', '10s', '30s', '1m', '5m', '15m', '1h', '1D', '1W'];
const assets = ['EUR/USD', 'BTC/USD', 'AAPL', 'GOOGL', 'S&P 500'];

const Terminal: React.FC = () => {
    const [activeTimeframe, setActiveTimeframe] = useState('5m');
    const [activeAsset, setActiveAsset] = useState('BTC/USD');
    const [amount, setAmount] = useState('100');
    const { viewMode } = useAppContext();

    const renderProView = () => (
        <div className="flex flex-col h-full gap-4">
            <CandlestickChart asset={activeAsset} timeframe={activeTimeframe} />
        </div>
    );

    const renderSimpleView = () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-4">
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">AI Signal: BTC/USD</h3>
                <Gauge percentage={87} />
                <div className="w-full p-3 bg-brand-green/10 text-brand-green rounded-lg text-center font-semibold">
                    Trend Scanner: Strong Uptrend
                </div>
            </div>
            <div className="lg:col-span-2 flex flex-col items-center space-y-6">
                <div className="w-full flex justify-center items-center space-x-4">
                    <button className="flex-1 bg-brand-green hover:bg-green-600 text-white font-bold py-6 px-4 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center text-2xl">
                        <ArrowUp className="mr-2" /> CALL
                    </button>
                    <button className="flex-1 bg-brand-red hover:bg-red-600 text-white font-bold py-6 px-4 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center text-2xl">
                        <ArrowDown className="mr-2" /> PUT
                    </button>
                </div>
                <div className="w-full">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 text-center">Trade Amount</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full text-center bg-gray-100 dark:bg-dark-accent p-4 rounded-lg text-2xl font-semibold focus:ring-brand-blue focus:border-brand-blue"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Card className="h-full flex flex-col" title={viewMode === ViewMode.Pro ? `Trading Terminal - ${activeAsset}` : undefined}>
            {viewMode === ViewMode.Pro && (
                 <div className="flex flex-wrap items-center justify-between mb-4 border-b border-gray-200 dark:border-dark-accent pb-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <button className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-dark-accent rounded-md">
                                <span>{activeAsset}</span>
                                <ChevronDown size={16} />
                            </button>
                        </div>
                         <div className="flex items-center space-x-1 bg-gray-100 dark:bg-dark-accent rounded-md p-1">
                            {timeframes.map(tf => (
                                <button key={tf} onClick={() => setActiveTimeframe(tf)} className={`px-3 py-1 text-sm rounded-md ${activeTimeframe === tf ? 'bg-brand-blue text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                                    {tf}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-32 bg-gray-100 dark:bg-dark-accent p-2 rounded-md pl-7" />
                        </div>
                        <button className="bg-brand-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center"><ArrowUp size={16} className="mr-1" /> CALL</button>
                        <button className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center"><ArrowDown size={16} className="mr-1" /> PUT</button>
                    </div>
                 </div>
            )}
            <div className="flex-grow">
                {viewMode === ViewMode.Pro ? renderProView() : renderSimpleView()}
            </div>
        </Card>
    );
};

export default Terminal;
