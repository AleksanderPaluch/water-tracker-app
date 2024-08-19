import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import "./App.css";
import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import { useRefreshUser } from "../../hooks/RefreshUser";
import { selectIsRefreshing } from "../../redux/user/selectors";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignInPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const TrackerPage = lazy(() => import("../../pages/TrackerPage/TrackerPage"));
const ForgotPasswordPage = lazy(() =>
  import("../../pages/ForgotPasswordPage/ForgotPasswordPage")
);

function App() {
  useRefreshUser();
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      {isLoading || isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/reset-password" element={<ForgotPasswordPage />} />
            <Route
              path="/reset-password/:verificationToken"
              element={<ResetPasswordPage />}
            />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/signup"
              element={
                <RestrictedRoute
                  redirectTo="/signin"
                  component={<SignUpPage />}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/tracker"
                  component={<SignInPage />}
                />
              }
            />
            <Route
              path="/tracker"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<TrackerPage />}
                />
              }
            />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
