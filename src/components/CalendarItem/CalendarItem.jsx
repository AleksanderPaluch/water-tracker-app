import css from "./CalendarItem.module.css";
import PropTypes from "prop-types";

const CalendarItem = ({ day }) => {
  return (
    <li className={css.item}>
      <button className={css.button}>{day}</button>
    </li>
  );
};

export default CalendarItem;


CalendarItem.propTypes = {
    daysArray: PropTypes.string
  };