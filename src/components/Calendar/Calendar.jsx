import { useEffect, useState } from "react";
import css from "./Calendar.module.css";
import PropTypes from "prop-types";
import CalendarItem from "../CalendarItem/CalendarItem";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
import { apiGetDailyWaterBtn } from "../../redux/water/operations";
import { selectWaterDaily } from "../../redux/water/selectors";
import Icon from "../Icon/Icon";
import CalendarStats from "../CalendarStats/CalendarStats";

const Calendar = ({
  daysArray,
  handleDayClick,
  activeDate,
  displayedYear,
  displayedMonth,
  fullDate,
}) => {
  const today = new Date();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [progressData, setProgressData] = useState({});
  const [waterDailyStats, setWaterDailyStats] = useState([]);
  const waterData = useSelector(selectWaterDaily);
  const [isStatsShown, setIsStatsShown] = useState(false);
  const handleClickStats = () => {
    setIsStatsShown(!isStatsShown);
  };

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
              fullDate,
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
            amount: waterDayAmount
          })
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
    daysArray,
    displayedMonth,
    displayedYear,
    fullDate,
    user?.dailyNorma,
    waterData,
    dispatch,
  ]);

 

  return (
    <div>
      <button type="button" onClick={handleClickStats} className={css.chartBtn}>
        <Icon width="24" height="24" iconName="pie-chart" />
      </button>

      {isStatsShown ? (
        <CalendarStats waterDailyStats={waterDailyStats}/>
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
};
