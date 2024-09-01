import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";
import { selectWaterDaily } from "../../redux/water/selectors";
import { apiGetDailyWater } from "../../redux/water/operations"; // Екшен для завантаження даних

const WaterList = ({ date }) => {
  const dispatch = useDispatch();
  const waterList = useSelector(selectWaterDaily);

  const day = date?.day;
  const month = date?.month;
  const year = date?.year;
  const fullDate = date?.fullDate;

  // Завантаження списку води при першому рендері
  useEffect(() => {
    const fetchWaterList = async () => {
      try {
        // Відправка запиту на завантаження даних для поточної дати
        await dispatch(apiGetDailyWater({ day, month, year, fullDate })).unwrap();
      } catch (error) {
        console.log("Error fetching water list:", error);
      }
    };

    fetchWaterList();
  }, [dispatch, day, month, year, fullDate]); // Залежності - коли зміна дати, викликати запит

  // Сортування waterList за часом
  const sortedList =
    waterList && waterList.length > 0
      ? [...waterList].sort((a, b) => {
          const timeA = new Date(`1970-01-01T${a.time}:00`);
          const timeB = new Date(`1970-01-01T${b.time}:00`);
          return timeA - timeB;
        })
      : [];

  return (
    <div className={css.waterListBox}>
      {sortedList.length > 0 ? (
        <ul className={css.waterList}>
          {sortedList.map((water) => (
            <WaterItem
              amount={water.amount}
              time={water.time}
              key={water._id}
              id={water._id}
              date={date}
            />
          ))}
        </ul>
      ) : (
        <p>No water records available for today.</p>
      )}
    </div>
  );
};

export default WaterList;
