import { useSelector } from "react-redux";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import css from "./WaterMainInfo.module.css";
import { selectUser } from "../../redux/user/selectors";

const WaterMainInfo = () => {

  const user = useSelector(selectUser)
  console.log('user: ', user);




  return (
    <div className={css.waterInfoBox}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn  />
    </div>
  );
};

export default WaterMainInfo;
