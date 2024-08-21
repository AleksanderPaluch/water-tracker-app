import css from "./Calendar.module.css";
import PropTypes from "prop-types";
import CalendarItem from "../CalendarItem/CalendarItem";

const Calendar = ({ daysArray, handleDayClick, date }) => {
  const today = new Date();

  return (
    <div>
      <ul className={css.calendarList}>
        {daysArray.map((day) => {
          const currentDayDate = new Date(date.year, date.month - 1, day);

          const isToday =
            today.getDate() === currentDayDate.getDate() &&
            today.getMonth() === currentDayDate.getMonth() &&
            today.getFullYear() === currentDayDate.getFullYear();

          return (
            <CalendarItem
              day={day}
              key={day}
              handleDayClick={handleDayClick}
              isToday={isToday}
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
  date: PropTypes.object.isRequired,
};
