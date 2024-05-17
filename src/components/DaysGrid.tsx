import React from 'react';

interface Day {
    date: string;
    isToday: boolean;
    isSelected: boolean;
    isCurrentMonth: boolean;
}

interface DaysGridProps {
    days: Day[];
    setSelectedDate: (date: Date) => void;
}

const DaysGrid: React.FC<DaysGridProps> = ({ days, setSelectedDate }) => {
    return (
        <>
            <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm">
                {days.map((day) => (
                    <div key={day.date} className="py-2 border-t border-gray-200">
                        <button
                            type="button"
                            className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full font-semibold ${day.isSelected ? 'bg-black text-white' :
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
        </>
    );
};

export default DaysGrid;
