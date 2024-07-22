import Icon from "../Icon/Icon";
import css from "./WaterProgressBar.module.css";

const WaterProgressBar = () => {
  const percentage = 33;

  return (
    <div className={css.progressBarContainer}>
      <p className={css.text}>Today</p>
      <div className={css.dynamicBox}>
        <div
          className={css.dynamicPercentage}
          style={{
            left: percentage < 20 ? `${percentage - 2}%` : `${percentage - 4}%`,
          }}
        >
          {" "}
          {percentage}%
        </div>
      </div>
      <div className={css.progressBarBox} >
        <div className={css.progressBar} style={{
            width: `${percentage}%`
        }}></div>
        <Icon
          width="12"
          height="12"
          iconName="circle"
          styles={css.progressCircle}
          style={{
            left: `${percentage}%`,
          }}
        />
      </div>

      <div className={css.percentBox}>
        <span>0%</span>
        <span className={css.percent}>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;


