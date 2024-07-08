import Logo from "../Logo/Logo"
import PropTypes from "prop-types";

const Page = ({children}) => {
  return (
    <div>
      <Logo />
      {children}
    </div>
  )
}



export default Page


Page.propTypes = {
    children: PropTypes.node
}