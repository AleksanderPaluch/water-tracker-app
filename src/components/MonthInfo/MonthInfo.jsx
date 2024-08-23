import css from "./MonthInfo.module.css";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import Icon from "../Icon/Icon";
import CalendarStats from "../CalendarStats/CalendarStats";
import { useState } from "react";
import { getDateObject } from "../../helpers/getDate";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { apiGetDailyWater } from "../../redux/water/operations";
import { apiGetCurrentUser } from "../../redux/user/operations";

const MonthInfo = ({ date, setDate }) => {
  const day = date?.day;
  const month = date?.month;
  const year = date?.year;
  const fullDate = date?.fullDate;
  const formData = {}

  const dispatch = useDispatch();
  const [isStatsShown, setIsStatsShown] = useState(false);
  const currentDate = new Date();

  // Стан для відображення місяця і року
  const [displayedMonth, setDisplayedMonth] = useState(
    currentDate.getMonth() + 1
  );
  const [displayedYear, setDisplayedYear] = useState(currentDate.getFullYear());

  // Генеруємо кількість днів для відображуваного місяця
  const daysInMonth = new Date(displayedYear, displayedMonth, 0).getDate();
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const handleClickStats = () => {
    setIsStatsShown(!isStatsShown);
  };

  // Обробник для попереднього місяця
  const handlePrevMonth = () => {
    const threeMonthsAgo = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 3
    );
    const prevMonthDate = new Date(displayedYear, displayedMonth - 2);

    if (prevMonthDate >= threeMonthsAgo) {
      if (displayedMonth === 1) {
        setDisplayedMonth(12);
        setDisplayedYear((prevYear) => prevYear - 1);
      } else {
        setDisplayedMonth((prevMonth) => prevMonth - 1);
      }
    }
  };

  // Обробник для наступного місяця
  const handleNextMonth = () => {
    const nextMonthDate = new Date(displayedYear, displayedMonth);

    if (nextMonthDate <= currentDate) {
      if (displayedMonth === 12) {
        setDisplayedMonth(1);
        setDisplayedYear((prevYear) => prevYear + 1);
      } else {
        setDisplayedMonth((prevMonth) => prevMonth + 1);
      }
    }
  };

  const handleDayClick = async (day) => {
    const newDate = new Date(displayedYear, displayedMonth - 1, day);
    setDate(getDateObject(newDate)); // Оновлюємо тільки активну дату
    try {
      await dispatch(apiGetDailyWater({ ...formData, day, month, year, fullDate }));
      await dispatch(apiGetCurrentUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.monthInfoBox}>
      <div className={css.calendarHeader}>
        <p className={css.title}>{!isStatsShown ? "Month" : "Statistics"}</p>
        <div className={css.CalendarPaginationBox}>
          <CalendarPagination
            month={new Date(displayedYear, displayedMonth - 1).toLocaleString(
              "en",
              { month: "long" }
            )}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
          />
          <button
            type="button"
            onClick={handleClickStats}
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
        <Calendar
          daysArray={daysArray}
          handleDayClick={handleDayClick}
          activeDate={new Date(date.year, date.month - 1, date.day)}
          displayedYear={displayedYear}
          displayedMonth={displayedMonth}
        />
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
