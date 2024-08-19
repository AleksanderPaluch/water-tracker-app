import { useSelector } from "react-redux"
import css from "./WaterDailyNorma.module.css"
import { selectUser } from "../../redux/user/selectors"

const WaterDailyNorma = () => {

const user = useSelector(selectUser)
console.log('user: ', user);


  return (
    <div className={css.dailyNormaBox}>
      <p className={css.amount}>1.5 L</p>
      <p className={css.text}>My daily norma</p>
    </div>
  )
}

export default WaterDailyNorma

