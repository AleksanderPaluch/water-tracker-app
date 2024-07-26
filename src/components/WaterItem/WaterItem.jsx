import Icon from "../Icon/Icon";
import css from "./WaterItem.module.css";

const WaterItem = () => {
  return (
    <div className={css.waterItemBox}>
      <Icon width="38   " height="38" iconName="glass" styles={css.glass} />
      <div className={css.textBox}>
        <p className={css.text}>250 ml</p>
        <p className={css.text}>7:00 AM</p>
      </div>
      <div className={css.iconsBox}>
        <Icon width="14" height="14" iconName="edit" styles={css.icons} />
        <Icon width="14" height="14" iconName="trash" styles={css.icons} />
      </div>
      
    </div>
  );
};

export default WaterItem;
