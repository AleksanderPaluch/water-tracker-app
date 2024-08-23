import css from "./Calendar.module.css";
import PropTypes from "prop-types";
import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = ({
  daysArray,
  handleDayClick,
  activeDate,
  displayedYear,
  displayedMonth,
}) => {
  const today = new Date(); // Сьогоднішня дата

  return (
    <div>
      <ul className={css.calendarList}>
        {daysArray.map((day) => {
          const currentDayDate = new Date(
            displayedYear,
            displayedMonth - 1,
            day
          ); // Формуємо дату для дня в календарі

          const isToday =
            today.getDate() === currentDayDate.getDate() &&
            today.getMonth() === currentDayDate.getMonth() &&
            today.getFullYear() === currentDayDate.getFullYear(); // Перевірка на сьогоднішній день

          const isSelected =
            activeDate.getDate() === currentDayDate.getDate() &&
            activeDate.getMonth() === currentDayDate.getMonth() &&
            activeDate.getFullYear() === currentDayDate.getFullYear(); // Перевірка на вибрану дату

          return (
            <CalendarItem
              day={day}
              key={day}
              handleDayClick={handleDayClick}
              isToday={isToday}
              isSelected={isSelected} // Додаємо параметр для активного дня
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  daysArray: PropTypes.array.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  activeDate: PropTypes.instanceOf(Date).isRequired, // Активна вибрана дата
  displayedYear: PropTypes.number.isRequired, // Рік для відображення
  displayedMonth: PropTypes.number.isRequired, // Місяць для відображення
};
