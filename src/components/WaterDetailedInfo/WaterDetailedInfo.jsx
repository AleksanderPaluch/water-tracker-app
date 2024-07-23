import AddWaterBtn from "../AddWaterBtn/AddWaterBtn"
import css from "./WaterDetailedInfo.module.css"

const WaterDetailedInfo = () => {

  const user = "Alexander"

  return (
      
    <div className={css.waterInfoBox}>
      <p className={css.welcomeText}>Hello <span className={css.welcomeName}>, {user}!</span></p>
      <AddWaterBtn isBig={false}/>
    </div>
  )
}

export default WaterDetailedInfo
