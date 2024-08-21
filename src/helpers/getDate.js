export const getDateObject = (date = null) => {
  const currentDate = date ? new Date(date) : new Date();
  const month = currentDate.getMonth() + 1;

  const today = {
    day: currentDate.getDate(),
    month: month,
    year: currentDate.getFullYear(),
    dayInMonth: daysInMonth(month, currentDate.getFullYear()),
    fullDate:
      currentDate.getFullYear() +
      "-" +
      month.toString().padStart(2, "0") +
      "-" +
      currentDate.getDate().toString().padStart(2, "0"),
    monthName: currentDate.toLocaleString("en", { month: "long" }),
    month_name: currentDate.toLocaleString("en", { month: "long" }),
    full: currentDate,
  };
  return today;
};

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
