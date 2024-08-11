import css from "./ResetPasswordForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Icon from "../Icon/Icon";
import { useState } from "react";

const validationSchema = Yup.object().shape({
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
    password: "",
  confirmPassword: "",
};

const ResetPasswordForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isRepeatVisible, setIsRepeatVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleRepeatPasswordVisibility = () => {
    setIsRepeatVisible(!isRepeatVisible);
  };


  const handleResetPassword = async (formData, formActions) => {
    formActions.resetForm();
    formActions.setSubmitting(false);

    try {
      // await dispatch(apiResetPassword(formData)).unwrap();
      toast.success(
        "Check your email! We sent you a link to reset your password.",
        {
          duration: 5000,
        }
      );
      navigate("/signin");
    } catch (error) {
      toast.error(error || "Failed  sent you a link to reset your password.", {
        duration: 5000,
      });
    }
  };

  return (
    <div className={css.formBox}>
      <Formik
        validationSchema={validationSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleResetPassword}
      >
        {({ submitCount }) => (
          <Form className={css.form}>
            <h1 className={css.formTitle}>Change password</h1>
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
              title="click to reset password"
              aria-label="reset password"
            >
              Send
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
      <span className={css.redirectText}>
        Already registered?{" "}
        <Link className={css.redirectLink} to="/signin">
          Sign In
        </Link>
      </span>
    </div>
  );
};

export default ResetPasswordForm;
