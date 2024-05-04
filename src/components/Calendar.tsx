import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import holydays_data from './HolydaysData';

type Holiday = {
    name: string;
    state: string[];
    date_24: string;
};

interface CalendarProps {
    selectedState: string;
}

const Calendar: React.FC<CalendarProps> = ({ selectedState }) => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const parseGermanDate = (dateStr: string): Date => {
        const [day, month, year] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day);
    };

    const handleDateSelect = (dateStr: string) => {
        const newDate = parseGermanDate(dateStr);
        setSelectedDate(newDate);
        setCurrentDate(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const filteredHolidays = holydays_data.filter((holiday: Holiday) => holiday.state.includes(selectedState));

    const daysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    const createDaysForCurrentMonth = () => {
        const days: Array<{
            date: string;
            isToday: boolean;
            isSelected: boolean;
            isCurrentMonth: boolean;
        }> = [];
        const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());

        for (let i = 1; i <= totalDays; i++) {
            const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const isToday = day.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);
            const isSelected = !!selectedDate && day.toISOString().slice(0, 10) === selectedDate.toISOString().slice(0, 10);

            days.push({
                date: day.toISOString().slice(0, 10),
                isToday: isToday,
                isSelected: isSelected,
                isCurrentMonth: true
            });
        }

        return days;
    };

    const days = createDaysForCurrentMonth();

    return (
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
            <section className="md:pr-14 ">
                <h2 className="text-base font-semibold leading-6 text-gray-900">Feiertage in {selectedState}</h2>
                <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                    {filteredHolidays.map((holiday, index) => (
                        <li
                            key={index}
                            className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
                            onClick={() => handleDateSelect(holiday.date_24)}
                        >
                            <div className="flex-auto">
                                <p className="text-gray-900">{holiday.name}</p>
                                <p className="mt-0.5">{holiday.date_24}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
            <div className="mt-12 md:mt-0 md:pl-14">
                <div className="flex items-center">
                    <h2 className="flex-auto text-sm font-semibold text-gray-900">{`${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`}</h2>
                    <button type="button" className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" onClick={goToPreviousMonth}>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button type="button" className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" onClick={goToNextMonth}>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                    <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                </div>
                <div className="mt-2 grid grid-cols-7 text-sm">
                    {days.map((day) => (
                        <div key={day.date} className="py-2 border-t border-gray-200">
                            <button
                                type="button"
                                className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full font-semibold ${
                                    day.isSelected ? 'bg-black text-white' :
                                    day.isToday ? 'bg-indigo-200 text-indigo-600' :
                                    'hover:bg-gray-200 text-gray-900'
                                }`}
                                onClick={() => setSelectedDate(new Date(day.date))}
                            >
                                <time dateTime={day.date}>
                                    {day.date.split('-')[2].replace(/^0/, '')} {/* Remove leading zero */}
                                </time>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
