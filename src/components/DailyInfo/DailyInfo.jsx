import css from "./DailyInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import ChooseDate from "../ChooseDate/ChooseDate";
import WaterList from "../WaterList/WaterList";

const DailyInfo = () => {
  return (
    <>
      <div className={css.dailyInfoBox}>
        <ChooseDate />
        <AddWaterBtn isBig={false} />
      </div>
      <WaterList />
    </>
  );
};

export default DailyInfo;
