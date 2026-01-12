
import React, { useState } from 'react';
import { KeyRound, ShieldCheck, ShieldOff, Save, Trash2 } from 'lucide-react';
import Card from '../components/ui/Card';
import ToggleSwitch from '../components/ui/ToggleSwitch';

const AutoBot: React.FC = () => {
    const [iqOptionKey, setIqOptionKey] = useState('');
    const [quotexKey, setQuotexKey] = useState('');
    const [stopWin, setStopWin] = useState(true);
    const [stopLoss, setStopLoss] = useState(true);
    const [noGale, setNoGale] = useState(false);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">AutoBot Configuration</h2>
            
            <Card title="Broker API Integration">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="iq-option" className="block text-sm font-medium text-gray-500 dark:text-gray-400">IQ Option API Key</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="iq-option"
                                className="block w-full pl-10 p-3 sm:text-sm bg-gray-100 dark:bg-dark-accent border-transparent focus:ring-brand-blue focus:border-brand-blue rounded-md"
                                placeholder="••••••••••••••••••••"
                                value={iqOptionKey}
                                onChange={(e) => setIqOptionKey(e.target.value)}
                            />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="quotex" className="block text-sm font-medium text-gray-500 dark:text-gray-400">Quotex API Key</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <KeyRound className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="quotex"
                                className="block w-full pl-10 p-3 sm:text-sm bg-gray-100 dark:bg-dark-accent border-transparent focus:ring-brand-blue focus:border-brand-blue rounded-md"
                                placeholder="••••••••••••••••••••"
                                value={quotexKey}
                                onChange={(e) => setQuotexKey(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </Card>

            <Card title="Risk Management">
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-accent rounded-lg">
                        <div>
                            <h4 className="font-semibold">Profit Protection (Stop Win)</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Automatically stop trading after reaching a profit target.</p>
                        </div>
                        <ToggleSwitch checked={stopWin} onChange={() => setStopWin(!stopWin)} IconOn={<ShieldCheck size={16}/>} IconOff={<ShieldOff size={16}/>}/>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-accent rounded-lg">
                        <div>
                            <h4 className="font-semibold">Capital Protection (Stop Loss)</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Automatically stop trading after a certain loss limit.</p>
                        </div>
                        <ToggleSwitch checked={stopLoss} onChange={() => setStopLoss(!stopLoss)} IconOn={<ShieldCheck size={16}/>} IconOff={<ShieldOff size={16}/>} />
                    </div>
                </div>
            </Card>

            <Card title="Trading Strategy">
                 <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-accent rounded-lg">
                    <div>
                        <h4 className="font-semibold">Martingale vs. No Gale</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Enable Martingale strategy (doubling down on loss). Default is No Gale.</p>
                    </div>
                    <ToggleSwitch checked={!noGale} onChange={() => setNoGale(!noGale)} />
                </div>
            </Card>
            <div className="flex justify-end space-x-4">
                 <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-transparent rounded-md hover:text-brand-red">
                    <Trash2 size={16} className="mr-2" />
                    Reset Settings
                </button>
                <button className="flex items-center px-6 py-3 text-sm font-medium text-white bg-brand-blue rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-dark-primary">
                    <Save size={16} className="mr-2" />
                    Save Configuration
                </button>
            </div>
        </div>
    );
};

export default AutoBot;
