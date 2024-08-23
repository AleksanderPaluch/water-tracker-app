import DailyInfo from "../DailyInfo/DailyInfo";
import MonthInfo from "../MonthInfo/MonthInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";
import PropTypes from "prop-types";

const WaterDetailedInfo = ({ date, setDate }) => {
  return (
    <div className={css.waterInfoBox}>
      <UserPanel />
      <DailyInfo date={date} />
      <MonthInfo date={date} setDate={setDate} />
    </div>
  );
};

WaterDetailedInfo.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default WaterDetailedInfo;
