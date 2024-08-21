import css from "./CalendarItem.module.css";
import PropTypes from "prop-types";

const CalendarItem = ({ day, handleDayClick, isToday }) => {

  
  const amount = "100%";



  return (
    <li className={css.item}>
      <button
        onClick={() => handleDayClick(day)}
        className={`${css.button} ${isToday ? css.isToday : ""}`}
      >
        {day}
      </button>
      <p className={css.text}>{amount}</p>
    </li>
  );
};

export default CalendarItem;

CalendarItem.propTypes = {
  day: PropTypes.number.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  isToday: PropTypes.bool.isRequired
};
