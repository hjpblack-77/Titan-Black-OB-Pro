
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
    return (
        <div className={`bg-white dark:bg-dark-secondary rounded-xl shadow-lg p-4 md:p-6 ${className}`}>
            {title && <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>}
            {children}
        </div>
    );
};

export default Card;
