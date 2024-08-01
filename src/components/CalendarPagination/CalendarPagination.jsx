import css from "./CalendarPagination.module.css";
import PropTypes from "prop-types";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const CalendarPagination = ({ currentDate }) => {

  const formatDate = (date) => {
    const month = date.toLocaleString("en-Us", { month: "long" });
    const year = date.getFullYear()

    return `${month}, ${year}`;
  };


  const  currentMonth = formatDate(currentDate)


  return (
    <div className={css.paginationBox}>
      <button type="button" className={css.arrowBtn}>
        <IoChevronBack className={css.icon} />
      </button>
      <p className={css.text}>{currentMonth}</p>
      <button type="button" className={css.arrowBtn}>
        <IoChevronForward className={css.icon} />
      </button>
    </div>
  );
};

export default CalendarPagination;

CalendarPagination.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
};
