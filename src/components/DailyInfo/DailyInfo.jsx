import css from "./DailyInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import PropTypes from "prop-types";
import WaterList from "../WaterList/WaterList";

const DailyInfo = ({ date }) => {
  return (
    <>
      <div className={css.dailyInfoBox}>
        <p className={css.date}>
          {" "}
          {date.day}, {date.monthName}{" "}
        </p>
        <AddWaterBtn isBig={false} />
      </div>
      <WaterList />
    </>
  );
};

DailyInfo.propTypes = {
  date: PropTypes.object.isRequired,
};
export default DailyInfo;
