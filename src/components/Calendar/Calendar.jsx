import { useEffect, useState } from "react";
import css from "./Calendar.module.css";
import PropTypes from "prop-types";
import CalendarItem from "../CalendarItem/CalendarItem";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
import { apiGetDailyWaterBtn } from "../../redux/water/operations";
import { selectWaterDaily } from "../../redux/water/selectors";

import CalendarStats from "../CalendarStats/CalendarStats";

const Calendar = ({
  daysArray,
  handleDayClick,
  activeDate,
  displayedYear,
  displayedMonth,
  fullDate,
  date,
  isStatsShown,
}) => {
  const today = new Date();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [progressData, setProgressData] = useState({});
  const [waterDailyStats, setWaterDailyStats] = useState([]);
  const waterData = useSelector(selectWaterDaily);

  useEffect(() => {
    const fetchProgress = async () => {
      const userDailyNorma = user?.dailyNorma;
      const updatedProgress = {};
      const updatedWaterDailyStats = [];
      for (const day of daysArray) {
        try {
          const { waterDaily } = await dispatch(
            apiGetDailyWaterBtn({
              day,
              month: displayedMonth,
              year: displayedYear,
              fullDate: fullDate,
            })
          ).unwrap();

          const waterDayAmount = waterDaily
            ? waterDaily.reduce((sum, water) => sum + water.amount, 0)
            : 0;

          const progress = userDailyNorma
            ? Math.min(Math.floor((waterDayAmount / userDailyNorma) * 100), 100)
            : 0;

          updatedWaterDailyStats.push({
            day,
            amount: waterDayAmount,
          });
          updatedProgress[day] = progress;
        } catch (error) {
          console.log("error: ", error);
        }
      }

      setProgressData(updatedProgress);
      setWaterDailyStats(updatedWaterDailyStats);
    };

    fetchProgress();
  }, [
    displayedMonth,   
    user?.dailyNorma,
  ]);

  return (
    <div>
      {isStatsShown ? (
        <CalendarStats waterDailyStats={waterDailyStats} date={date} />
      ) : (
        <ul className={css.calendarList}>
          {daysArray.map((day) => {
            const progress = progressData[day] || 0;
            const currentDayDate = new Date(
              displayedYear,
              displayedMonth - 1,
              day
            );

            const isToday =
              today.getDate() === currentDayDate.getDate() &&
              today.getMonth() === currentDayDate.getMonth() &&
              today.getFullYear() === currentDayDate.getFullYear();

            const isInFuture =
              today.getDate() < currentDayDate.getDate() &&
              today.getMonth() <= currentDayDate.getMonth() &&
              today.getFullYear() <= currentDayDate.getFullYear();

            const isSelected =
              activeDate.getDate() === currentDayDate.getDate() &&
              activeDate.getMonth() === currentDayDate.getMonth() &&
              activeDate.getFullYear() === currentDayDate.getFullYear();

            return (
              <CalendarItem
                day={day}
                key={day}
                handleDayClick={handleDayClick}
                isToday={isToday}
                isSelected={isSelected}
                progress={progress}
                isInFuture={isInFuture}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  daysArray: PropTypes.array.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  activeDate: PropTypes.instanceOf(Date).isRequired,
  displayedYear: PropTypes.number.isRequired,
  displayedMonth: PropTypes.number.isRequired,
  fullDate: PropTypes.string,
  date: PropTypes.object,
};
