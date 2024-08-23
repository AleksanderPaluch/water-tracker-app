import css from "./CalendarPagination.module.css";
import PropTypes from "prop-types";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";


const CalendarPagination = ({ month, handlePrevMonth, handleNextMonth }) => {
  return (
    <div className={css.paginationBox}>
      <button type="button" className={css.arrowBtn} onClick={handlePrevMonth}>
        <IoChevronBack className={css.icon} />
      </button>
      <p className={css.text}>{month}</p>
      <button type="button" className={css.arrowBtn} onClick={handleNextMonth}>
        <IoChevronForward className={css.icon} />
      </button>
    </div>
  );
};

export default CalendarPagination;

CalendarPagination.propTypes = {
  month: PropTypes.string.isRequired,
  handleNextMonth: PropTypes.func.isRequired,
  handlePrevMonth: PropTypes.func.isRequired
};
