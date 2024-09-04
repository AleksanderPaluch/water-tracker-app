import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignedIn } from "../redux/auth/selectors";
import { apiAuthGoogle, apiTokenRefresh } from "../redux/auth/operations";
import { apiGetCurrentUser } from "../redux/user/operations";
import { useSearchParams } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

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
  const [searchParams] = useSearchParams();
  const gToken = searchParams.get("token");
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  // Викликаємо apiAuthGoogle тільки один раз при наявності gToken
  useEffect(() => {
    const handleGoogleAuth = async () => {
      if (gToken) {
        try {
          await dispatch(apiAuthGoogle()).unwrap();
          await dispatch(apiGetCurrentUser()).unwrap();
        } catch (error) {
          console.error("Error during Google authentication:", error);
        }
      }
    };

    handleGoogleAuth();
  }, [gToken, dispatch]);  // Викликаємо ефект тільки при зміні gToken або dispatch

  useEffect(() => {
    const persistedState = localStorage.getItem("persist:root");
    if (persistedState) {
      const parsedState = JSON.parse(persistedState);

      if (parsedState.auth) {
        const authState = JSON.parse(parsedState.auth);
        const token = authState.token;
        if (token && !isTokenValid(token)) {
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

