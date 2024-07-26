import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";

const WaterList = () => {
  return (
    <div>
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

      <div className={css.waterBar}></div>
    </div>
  );
};

export default WaterList;
