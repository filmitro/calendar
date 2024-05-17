export const parseGermanDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day + 1); // Adjusted to ensure it's correctly parsed
};

export const daysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};
