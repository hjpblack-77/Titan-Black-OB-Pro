
import React from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '../../types';

const toastConfig = {
    success: {
        icon: <CheckCircle className="text-brand-green" />,
        barClass: 'bg-brand-green',
    },
    error: {
        icon: <AlertCircle className="text-brand-red" />,
        barClass: 'bg-brand-red',
    },
    warning: {
        icon: <AlertCircle className="text-yellow-500" />,
        barClass: 'bg-yellow-500',
    },
    info: {
        icon: <Info className="text-brand-blue" />,
        barClass: 'bg-brand-blue',
    },
};

const Toast: React.FC<ToastMessage> = ({ message, type }) => {
    const config = toastConfig[type];

    return (
        <div className="fixed top-5 right-5 z-[100] w-full max-w-sm bg-white dark:bg-dark-secondary shadow-2xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden animate-fade-in-right">
            <div className="p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        {config.icon}
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{message}</p>
                    </div>
                </div>
            </div>
            <div className={`h-1 ${config.barClass} animate-progress-bar`}></div>
        </div>
    );
};

// Add keyframes to your global styles if possible, otherwise this is a conceptual representation.
// You can add this in index.html in a <style> tag.
/*
@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(100%); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes progress-bar {
  from { width: 100%; }
  to { width: 0%; }
}
.animate-fade-in-right { animation: fade-in-right 0.5s ease-out forwards; }
.animate-progress-bar { animation: progress-bar 3s linear forwards; }
*/


export default Toast;
