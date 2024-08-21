import { useState } from "react";
import DailyInfo from "../DailyInfo/DailyInfo";
import MonthInfo from "../MonthInfo/MonthInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css"
import { getDateObject } from "../../helpers/getDate";

const WaterDetailedInfo = () => {
  const [date, setDate] = useState(getDateObject());
  return (
    <div className={css.waterInfoBox}>
      <UserPanel />
      <DailyInfo date={date}/>
      <MonthInfo date={date} setDate={setDate} />
    </div>
  );
};

export default WaterDetailedInfo;
