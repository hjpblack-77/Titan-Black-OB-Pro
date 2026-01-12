
import React from 'react';
import Card from '../components/ui/Card';
import { useAppContext } from '../contexts/AppContext';

const assets = ['EUR/USD', 'BTC/USD', 'AAPL', 'USD/JPY', 'ETH/USD'];

const generateCorrelationData = () => {
    const data: number[][] = [];
    for (let i = 0; i < assets.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < assets.length; j++) {
            if (i === j) row.push(1);
            else if (data[j]) row.push(data[j][i]);
            else row.push(parseFloat((Math.random() * 2 - 1).toFixed(2)));
        }
        data.push(row);
    }
    return data;
};

const correlationData = generateCorrelationData();

const CorrelationHeatmap: React.FC = () => {
    const getColor = (value: number) => {
        if (value > 0) {
            return `rgba(34, 197, 94, ${Math.abs(value)})`; // Green for positive
        }
        return `rgba(239, 68, 68, ${Math.abs(value)})`; // Red for negative
    };

    return (
        <div className="grid gap-1" style={{ gridTemplateColumns: `auto repeat(${assets.length}, 1fr)` }}>
            {/* Top Header */}
            <div />
            {assets.map((asset, i) => (
                <div key={i} className="text-xs font-bold text-center text-gray-400 p-2 truncate">{asset}</div>
            ))}
            
            {/* Rows */}
            {assets.map((rowAsset, i) => (
                <React.Fragment key={i}>
                    <div className="text-xs font-bold text-right text-gray-400 p-2 truncate">{rowAsset}</div>
                    {correlationData[i].map((value, j) => (
                        <div key={j} className="h-16 flex items-center justify-center rounded-md" style={{ backgroundColor: getColor(value) }}>
                            <span className="font-bold text-white text-shadow-sm">{value.toFixed(2)}</span>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

const Analytics: React.FC = () => {
    const { showToast } = useAppContext();
    
    React.useEffect(() => {
        const timer = setTimeout(() => {
            showToast({ message: "Careful: Risk pattern detected in your recent trades.", type: "warning" });
        }, 3000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Performance Analytics</h2>

            <Card title="Asset Correlation Matrix">
                <CorrelationHeatmap />
            </Card>

            <Card title="Detailed Trade History">
                 <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-dark-accent">
                        <thead className="bg-dark-accent/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Asset</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Result</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-accent">
                           <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">BTC/USD</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-green">CALL</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">$100.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-green">+$87.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Just now</td>
                           </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">EUR/USD</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-red">PUT</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">$50.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-red">-$50.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2 minutes ago</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Analytics;
