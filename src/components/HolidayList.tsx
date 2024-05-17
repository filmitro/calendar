import React from 'react';
import { Holiday } from './types';
import { parseGermanDate } from './utils';

interface HolidayListProps {
    holidays: Holiday[];
    selectedDate: Date | null;
    handleDateSelect: (dateStr: string) => void;
}

const HolidayList: React.FC<HolidayListProps> = ({ holidays, selectedDate, handleDateSelect }) => {
    const isSelectedHoliday = (holidayDate: string) => {
        if (!selectedDate) return false;
        return selectedDate.toISOString().slice(0, 10) === parseGermanDate(holidayDate).toISOString().slice(0, 10);
    };

    return (
        <section className="md:pr-14">
            <h2 className="text-base font-semibold bg-white text-gray-900 sticky top-0">
                Wählen Sie ein Bundesland aus
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6">
                {holidays.map((holiday, index) => (
                    <li
                        key={index}
                        className={`group flex items-center space-x-4 rounded-xl px-4 py-2 ${isSelectedHoliday(holiday.date) ? 'bg-black text-white' : 'focus-within:bg-gray-100 hover:bg-gray-100'
                            }`}
                        onClick={() => handleDateSelect(holiday.date)}
                    >
                        <div className="flex-auto">
                            <p className={`${isSelectedHoliday(holiday.date) ? 'text-white' : 'text-gray-900'}`}>
                                {holiday.name}
                            </p>
                            <p className={`mt-0.5 ${isSelectedHoliday(holiday.date) ? 'text-white' : 'text-gray-900'}`}>
                                {holiday.date}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default HolidayList;
