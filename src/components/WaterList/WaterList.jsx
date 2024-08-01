import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";

const WaterList = () => {
  return (
    <div className={css.waterListBox}>
      <ul className={css.waterList}>
        <li>
          <WaterItem />
        </li>
        <li>
          <WaterItem />
        </li>
        <li>
          <WaterItem />
        </li>
        <li>
          <WaterItem />
        </li>
      </ul>

     
    </div>
  );
};

export default WaterList;
