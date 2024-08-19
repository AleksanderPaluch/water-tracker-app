import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignedIn } from "../redux/auth/selectors";
import { apiTokenRefresh } from "../redux/auth/operations";

// import { userInfo } from '../redux/user/operations';
// import { tokenRefresh } from '../redux/auth/operations';
// import { useSearchParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { apiGetCurrentUser } from "../redux/user/operations";

const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    if (!exp) return false;
    const expInMillis = exp * 1000;
    return Date.now() < expInMillis;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};

export const useRefreshUser = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);


  useEffect(() => {
    const persistedState = localStorage.getItem("persist:root");
    if (persistedState) {
      const parsedState = JSON.parse(persistedState);

      if (parsedState.auth) {
        const authState = JSON.parse(parsedState.auth);
        const token = authState.token;
        if (!isTokenValid) {
          const dispatchRefreshToken = async () => {
            try {
              await dispatch(apiTokenRefresh()).unwrap();
              await dispatch(apiGetCurrentUser()).unwrap();
            } catch (err) {
              console.error(
                "Error refreshing token or fetching user info:",
                err
              );
            }
          };
          dispatchRefreshToken();
        }
      }
    }
  }, [dispatch]);

  return [isSignedIn];
};
