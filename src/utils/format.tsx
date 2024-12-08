export const formatString = (str) => {
    if (!str) return "";
  
    // Replace hyphens with spaces and capitalize each word
    return str
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
};
  
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Extract day, month, and year
  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()].slice(0,3);
  const year = date.getFullYear();

  // Return formatted date
  return `${day} ${month} ${year}`;
}

export const getTwoDigitDate = (day: string | number) => {
  if (typeof day == "string") day = parseInt(day);
  if (day < 1 || day > 31) throw "Invalid Day";
  return day < 10 ? `0${day}` : day;
};

