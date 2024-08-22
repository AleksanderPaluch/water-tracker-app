import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import css from "./WaterMainInfo.module.css";
import { selectDailyNorma } from "../../redux/user/selectors";
import { useSelector } from "react-redux";
import { selectWaterDaily } from "../../redux/water/selectors";

const WaterMainInfo = () => {
  const userDailyNorma = useSelector(selectDailyNorma);
  const waterList = useSelector(selectWaterDaily);

  const waterDayAmount = waterList
    ? waterList.reduce((sum, water) => sum + water.amount, 0)
    : 0;

  const progress = userDailyNorma
    ? Math.min(Math.floor((waterDayAmount / userDailyNorma) * 100), 100)
    : 0;

  return (
    <div className={css.waterInfoBox}>
      {userDailyNorma && <WaterDailyNorma userDailyNorma={userDailyNorma} />}
      <WaterProgressBar progress={progress} />
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
