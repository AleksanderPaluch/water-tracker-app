import { NavLink } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
      <h1>OOOps page not found</h1>
      <NavLink to="/" >HomePage</NavLink>
    </div>
  )
}

export default NotFoundPage
