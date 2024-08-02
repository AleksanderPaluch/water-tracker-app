import css from "./CalendarItem.module.css";
import PropTypes from "prop-types";

const CalendarItem = ({ day, isToday }) => {

const amount = "100%"
  
  return (
    <li className={css.item}>
      <button className={`${css.button} ${isToday ? css.isToday : ""}`}>
        {day}
      </button>
      <p className={css.text}>{amount}</p>
    </li>
  );
};

export default CalendarItem;

CalendarItem.propTypes = {
  daysArray: PropTypes.string,
};
