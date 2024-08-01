import css from "./MonthInfo.module.css";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import Icon from "../Icon/Icon";
import CalendarStats from "../CalendarStats/CalendarStats";
import { useState } from "react";

const MonthInfo = () => {
  const [isStatsShown, setIsStatsShown] = useState(false);

  const hadleClick = () => {
    setIsStatsShown(!isStatsShown);
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); 
  const currentYear = currentDate.getFullYear();
  const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  

  const daysArray = Array.from({ length: daysInCurrentMonth }, (_, index) => index + 1);
  
  


  return (
    <div className={css.monthInfoBox}>
      <div className={css.calendarHeader}>
        <p className={css.title}>{!isStatsShown ? "Month" : "Statistics"}</p>
        <div className={css.CalendarPaginationBox}>
          <CalendarPagination currentDate={currentDate} />
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
      {!isStatsShown && <Calendar daysArray={daysArray} />}
      {isStatsShown && <CalendarStats />}
    </div>
  );
};

export default MonthInfo;
