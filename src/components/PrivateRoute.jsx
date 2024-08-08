import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../redux/auth/selectors";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */


const PrivateRoute = ({ component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? component : <Navigate to={redirectTo} />;
};



export default PrivateRoute;


PrivateRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.string,
};