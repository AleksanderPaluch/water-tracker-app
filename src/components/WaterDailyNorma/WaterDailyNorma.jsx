import { useSelector } from "react-redux";
import css from "./WaterDailyNorma.module.css";
import { selectUser } from "../../redux/user/selectors";

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);
  const userAmount = user?.dailyNorma

  return (
    <div className={css.dailyNormaBox}>
      <p className={css.amount}>{userAmount / 1000} L</p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
