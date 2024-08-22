import { useSelector } from "react-redux";
import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";
import { selectWaterDaily } from "../../redux/water/selectors";

const WaterList = () => {
  const waterList = useSelector(selectWaterDaily);


  return (
    <div className={css.waterListBox}>
      {waterList && (
        <ul className={css.waterList}>
          {waterList.map((water) => (
            <WaterItem amount={water.amount} time={water.time} key={water.id} id={water.id}/>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WaterList;
