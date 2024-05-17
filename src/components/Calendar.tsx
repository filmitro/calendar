import React, { useState } from 'react';
import Holydays from './HolydaysData';
import HolidayList from './HolidayList';
import MonthNavigation from './MonthNavigation';
import DaysGrid from './DaysGrid';
import { parseGermanDate, daysInMonth } from './utils';
import { Holiday } from './types';

interface CalendarProps {
    selectedState: string;
}

const Calendar: React.FC<CalendarProps> = ({ selectedState }) => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

    const filteredHolidays = Holydays.filter((holiday: Holiday) => holiday.state.includes(selectedState));

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
            <HolidayList holidays={filteredHolidays} selectedDate={selectedDate} handleDateSelect={handleDateSelect} />
            <div className="mt-12 md:mt-0 md:pl-14">
                <div className="sticky top-10">
                    <MonthNavigation currentDate={currentDate} goToPreviousMonth={goToPreviousMonth} goToNextMonth={goToNextMonth} />
                    <DaysGrid days={days} setSelectedDate={setSelectedDate} />
                </div>
            </div>
        </div>
    );
};

export default Calendar;
