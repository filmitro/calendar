import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface MonthNavigationProps {
    currentDate: Date;
    goToPreviousMonth: () => void;
    goToNextMonth: () => void;
}

const MonthNavigation: React.FC<MonthNavigationProps> = ({ currentDate, goToPreviousMonth, goToNextMonth }) => {
    return (
        <div className="flex items-center">
            <h2 className="flex-auto text-sm font-semibold text-gray-900">
                {`${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`}
            </h2>
            <button type="button" className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" onClick={goToPreviousMonth}>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" onClick={goToNextMonth}>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    );
};

export default MonthNavigation;
