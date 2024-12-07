export const getTwoDigitDate = (day: string | number) => {
  if (typeof day == "string") day = parseInt(day);
  if (day < 1 || day > 31) throw "Invalid Day";
  return day < 10 ? `0${day}` : day;
};
