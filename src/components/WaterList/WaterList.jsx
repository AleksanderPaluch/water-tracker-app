import { useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";
import { selectWaterDaily } from "../../redux/water/selectors";

const WaterList = () => {

  
  const waterList = useSelector(selectWaterDaily);
  console.log('waterList: ', waterList);

  return (
    <div className={css.waterListBox}>
      {waterList && waterList.length > 0 ? (
        <ul className={css.waterList}>
          {waterList.map((water) => (
            <WaterItem
              amount={water.amount}
              time={water.time}
              key={water._id}
              id={water._id}
            />
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default WaterList;
