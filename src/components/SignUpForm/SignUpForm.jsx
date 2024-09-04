import css from "./SignUpForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operations";
import SignUpToast from "../Toasts/SignUpToast/SignUpToast";
import CustomToast from "../Toasts/CustomToast/CustomToast";
import { FcGoogle } from "react-icons/fc";

// import { useDispatch } from "react-redux";
// import { apiLoginUser } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const [isRepeatVisible, setIsRepeatVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleRepeatPasswordVisibility = () => {
    setIsRepeatVisible(!isRepeatVisible);
  };

  const registerUser = async (formData, formActions) => {
    formActions.setSubmitting(false);
    formActions.resetForm();

    try {
      await dispatch(apiRegisterUser(formData)).unwrap();
      SignUpToast();
      navigate("/signin");
    } catch (error) {
      if (error.message) {
        CustomToast(
          false,
          "Unable to reach the server, please try again later"
        );
      } else {
        CustomToast(false, error || "Failed to sign up");
        // Handle other types of errors (e.g., wrong credentials)
      }
    }
  };



  return (
    <div className={css.formBox}>
      <Formik
        validationSchema={validationSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={registerUser}
      >
        {({ submitCount }) => (
          <Form className={css.form}>
            <h1 className={css.formTitle}>Sign Up</h1>
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
                type={isVisible ? "string" : "password"}
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className={css.iconBtn}
                onClick={togglePasswordVisibility}
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

            <label className={css.label}>
              <span className={css.labelText}>Repeat password</span>
              <Field
                className={css.formInput}
                type={isRepeatVisible ? "string" : "password"}
                name="confirmPassword"
                autoComplete="off"
                placeholder="Repeat password"
              />
              <button
                type="button"
                className={css.iconBtn}
                onClick={toggleRepeatPasswordVisibility}
              >
                <Icon
                  width="20"
                  height="20"
                  iconName="eye-off"
                  styles={css.settings}
                />
              </button>
              {submitCount > 0 && (
                <ErrorMessage
                  name="confirmPassword"
                  component="span"
                  className={css.errorMessage}
                />
              )}
            </label>

            <button
              className={css.formBtn}
              type="submit"
              title="click to register user"
              aria-label="Register new user"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <span className={css.redirectText}>
        Already have account?{" "}
        <Link className={css.redirectLink} to="/signin">
          Sign In
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

export default SignUpForm;
