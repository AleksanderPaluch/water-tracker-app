import css from "./MonthInfo.module.css";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import Icon from "../Icon/Icon";
import CalendarStats from "../CalendarStats/CalendarStats";
import { useState } from "react";
import { getDateObject } from "../../helpers/getDate";
import PropTypes from "prop-types";

const MonthInfo = ({ date, setDate }) => {
  const [isStatsShown, setIsStatsShown] = useState(false);
  const currentDate = new Date();
  const daysArray = Array.from(
    { length: date.dayInMonth },
    (_, index) => index + 1
  );

  const hadleClick = () => {
    setIsStatsShown(!isStatsShown);
  };
  const handlePrevMonth = () => {
    const threeMontAgo = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 3,
      1
    );
    const prevMonthDate = new Date(date.year, date.month - 2);

    if (threeMontAgo <= prevMonthDate) {
      setDate(getDateObject(prevMonthDate));
    }
  };
  const handleNextMonth = () => {
    const nextMonthDate = new Date(date.year, date.month);

    if (nextMonthDate <= currentDate) {
      setDate(getDateObject(nextMonthDate));
    }
  };
  const handleDayClick = (day) => {
    const newDate = new Date(date.year, date.month - 1, day); // Оновлюємо лише день
    setDate(getDateObject(newDate)); // Оновлюємо стан з новою датою
  };

  return (
    <div className={css.monthInfoBox}>
      <div className={css.calendarHeader}>
        <p className={css.title}>{!isStatsShown ? "Month" : "Statistics"}</p>
        <div className={css.CalendarPaginationBox}>
          <CalendarPagination
            month={date.monthName}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
          />
          <button
            type="button"
            onClick={() => hadleClick()}
            className={css.chartBtn}
          >
            <Icon
              width="24"
              height="24"
              iconName="pie-chart"
              styles={css.plusIconSmall}
            />
          </button>
        </div>
      </div>
      {!isStatsShown && (
        <Calendar daysArray={daysArray} handleDayClick={handleDayClick} date={date} />
      )}
      {isStatsShown && <CalendarStats />}
    </div>
  );
};

MonthInfo.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default MonthInfo;
