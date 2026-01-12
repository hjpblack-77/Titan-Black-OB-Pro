
import React from 'react';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
    IconOn?: React.ReactNode;
    IconOff?: React.ReactNode;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, IconOn, IconOff }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-brand-blue">
            </div>
            <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-gray-500 transition-opacity duration-300" style={{ opacity: checked ? 0 : 1 }}>
                {IconOff}
            </span>
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-white transition-opacity duration-300" style={{ opacity: checked ? 1 : 0 }}>
                {IconOn}
            </span>
        </label>
    );
};

export default ToggleSwitch;
