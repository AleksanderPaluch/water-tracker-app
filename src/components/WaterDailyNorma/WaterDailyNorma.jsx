import css from "./WaterDailyNorma.module.css";

const WaterDailyNorma = ({ userDailyNorma }) => {
  return (
    <div className={css.dailyNormaBox}>
      <p className={css.amount}>{userDailyNorma ? userDailyNorma / 1000 : 2} L</p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
