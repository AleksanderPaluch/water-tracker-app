import css from "./DailyInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";

import WaterList from "../WaterList/WaterList";

const DailyInfo = ({date}) => {

  console.log(date);
  return (
    <>
      <div className={css.dailyInfoBox}>
      <p className={css.date}> {date.day}, {date.monthName}     </p>
        <AddWaterBtn isBig={false} />
      </div>
      <WaterList />
    </>
  );
};

export default DailyInfo;
