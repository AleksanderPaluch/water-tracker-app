import { useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";
import { selectWaterDaily } from "../../redux/water/selectors";

const WaterList = ({ date }) => {
  const waterList = useSelector(selectWaterDaily);

  // Сортування waterList за часом
  const sortedList = waterList && waterList.length > 0 ? [...waterList].sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a.time}:00`);
    const timeB = new Date(`1970-01-01T${b.time}:00`);
    return timeA - timeB;
  }) : [];

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
      ) : ""}
    </div>
  );
};

export default WaterList;
