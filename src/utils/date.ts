export const getMonthName = (month?:number): string => {
    const date = new Date(); // Get the current date
    if(month || month == 0) date.setMonth(month)
    const monthName = date.toLocaleString('default', { month: 'short' });
    return monthName;
  };
  
  export const getDay = (): number => {
    const date = new Date(); 
    return date.getDate();
  };
  
  export const getDaysInMonth = (): number => {
    const date = new Date(); // Get the current date
    const year = date.getFullYear(); // Get the current year
    const month = date.getMonth(); // Get the current month (0-11)
  
    // Create a date for the first day of the next month and subtract one day to get the last day of the current month
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate(); // Get the day of the month (1-31) for the last day
  };
  