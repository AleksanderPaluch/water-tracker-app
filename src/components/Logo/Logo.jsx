import { NavLink } from 'react-router-dom'
import css from "./Logo.module.css"

const Logo = () => {
  return (
    <NavLink className={css.logo} to="/" >HomePage</NavLink>
  )
}

export default Logo
