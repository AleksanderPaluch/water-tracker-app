import { useSelector } from "react-redux";
import css from "./WaterDailyNorma.module.css";
import { selectUser } from "../../redux/user/selectors";

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);

  return (
    <div className={css.dailyNormaBox}>
      <p className={css.amount}>
        {" "}
        {user.dailyNorma ? `${user.dailyNorma / 1000} ` : "2 "}L
      </p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
