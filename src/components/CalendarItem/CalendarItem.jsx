
import css from "./CalendarItem.module.css";
import PropTypes from "prop-types";

const CalendarItem = ({
  day,
  handleDayClick,
  isToday,
  isSelected,
  progress,
  isInFuture,
}) => {


  const buttonStyle = {
    "--progress-height": `${progress}%`, // Передаємо прогрес у вигляді CSS змінної
  };

  return (
    <li className={css.item}>
      <div className={css.btnBox}>
        <button
          onClick={() => handleDayClick(day)}
          className={`${css.button} ${isToday ? css.isToday : ""} ${
            isInFuture ? css.isInFuture : ""
          } ${isSelected ? css.isSelected : ""}`}
          style={buttonStyle}
        >
          {day}
        </button>
      </div>

   
    </li>
  );
};

export default CalendarItem;

CalendarItem.propTypes = {
  day: PropTypes.number.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  isToday: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
