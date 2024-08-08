import css from "./SignInForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiLoginUser } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().min(1)
  .required("Password is required"),
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

  const loginUser = (formData, formActions) => {
    console.log(formData);
    dispatch(apiLoginUser(formData));
    formActions.setSubmitting(false);
    formActions.resetForm();
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
            </label>
            {submitCount > 0 && (
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMessage}
              />
            )}
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
                onClick={togglePasswordVisibility}
                type="button"
                className={css.iconBtn}
              >
                <Icon
                  width="20"
                  height="20"
                  iconName="eye-off"
                  styles={css.settings}
                />
              </button>
            </label>
            {submitCount > 0 && (
              <ErrorMessage
                name="password"
                component="span"
                className={css.errorMessage}
              />
            )}
            <p className={css.forgotLink}>
              <Link className={css.forgotLink} to="/forgot-password">
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
    </div>
  );
};

export default SignInForm;
