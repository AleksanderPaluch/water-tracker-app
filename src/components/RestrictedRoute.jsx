import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../redux/auth/selectors";

/**
 * - If the route is restricted and the user is logged in,
 *  render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectIsSignedIn);


  return isSignedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.string,
};
