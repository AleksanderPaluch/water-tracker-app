import css from "./SignInForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiLoginUser } from "../../redux/auth/operations";
import { apiGetCurrentUser } from "../../redux/user/operations";
import CustomToast from "../Toasts/CustomToast/CustomToast";
import { FcGoogle } from "react-icons/fc";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const dispatch = useDispatch();

  const loginUser = async (formData, formActions) => {
    formActions.setSubmitting(false);
    formActions.resetForm();

    try {
      await dispatch(apiLoginUser(formData)).unwrap();
      await dispatch(apiGetCurrentUser()).unwrap();

      CustomToast(true, "Great to see you! You’ve successfully signed in");
    } catch (error) {
      if (error.message) {
        CustomToast(
          false,
          "Unable to reach the server, please try again later"
        );
        // Network error or server is down
      } else {
        CustomToast(false, error || "Failed to log in");
        // Handle other types of errors (e.g., wrong credentials)
      }
    }
  };

  return (
    <div className={css.formBox}>
      <Formik
        validationSchema={validationSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={loginUser}
      >
        {({ submitCount }) => (
          <Form className={css.form}>
            <h1 className={css.formTitle}>Sign In</h1>
            <label className={css.label}>
              <span className={css.labelText}>Email</span>
              <Field
                className={css.formInput}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.errorMessage}
                />
              )}
            </label>

            <label className={css.label}>
              <span className={css.labelText}>Password</span>
              <Field
                className={css.formInput}
                type={isVisible ? "text" : "password"}
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className={css.iconBtn}
              >
                <Icon
                  width="20"
                  height="20"
                  iconName={!isVisible ? "eye-off" : "eye"}
                  styles={css.settings}
                />
              </button>
              {submitCount > 0 && (
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.errorMessage}
                />
              )}
            </label>

            <p className={css.forgotLink}>
              <Link className={css.forgotLink} to="/reset-password">
                Forgot password?
              </Link>
            </p>

            <button
              className={css.formBtn}
              type="submit"
              title="click to login user"
              aria-label="Login user"
            >
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <span className={css.redirectText}>
        Dont have an account?{" "}
        <Link className={css.redirectLink} to="/signup">
          Sign Up
        </Link>
      </span>
      <div className={css.line}>
        <span>Or</span>
      </div>
      <a href="https://water-tracker-app-3d8d0b109609.herokuapp.com/users/google" className={css.GoogleBtn}>
        <FcGoogle className={css.icon} />
        Sign Up with Google
      </a>
    </div>
  );
};

export default SignInForm;
