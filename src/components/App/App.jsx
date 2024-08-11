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

// import { useRefreshUser } from "../../hooks/RefreshUser";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignInPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const TrackerPage = lazy(() => import("../../pages/TrackerPage/TrackerPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const ForgotPasswordPage = lazy(() =>
  import("../../pages/ForgotPasswordPage/ForgotPasswordPage")
);

function App() {
  // useRefreshUser();
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Layout>
        <Routes>
          <Route path="/reset-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:resetToken" element={<ResetPasswordPage />} />
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
              <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
            }
          />
          <Route
            path="users/verify/:verificationToken"
            element={<NotFoundPage />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
