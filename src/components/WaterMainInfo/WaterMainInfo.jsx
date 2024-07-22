import Icon from "../Icon/Icon"
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma"
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar"
import css from "./WaterMainInfo.module.css"




const WaterMainInfo = () => {
  return (
    
    <div className={css.waterInfoBox}>
    <WaterDailyNorma />
    <WaterProgressBar />
       
    <button className={css.addWaterBtn}>  <Icon width="16" height="16" iconName="plus" styles={css.plusIcon} />
      Add Water</button>
    </div>

  )
}

export default WaterMainInfo
