import css from "./SignUpForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
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
  //   const dispatch = useDispatch();

  //   const loginUser = (formData, formActions) => {
  //     dispatch(apiLoginUser(formData));
  //     formActions.resetForm();
  //   };

  return (
    <div className={css.formBox}>
      <Formik
        validationSchema={validationSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={(formData, formActions) => {
          console.log(formData);
          formActions.setSubmitting(false);
          formActions.resetForm()
          
        }}
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
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
              />
            </label>
            {submitCount > 0 && (
              <ErrorMessage
                name="password"
                component="span"
                className={css.errorMessage}
              />
            )}
            <label className={css.label}>
              <span className={css.labelText}>Repeat password</span>
              <Field
                className={css.formInput}
                type="password"
                name="confirmPassword"
                autoComplete="off"
                placeholder="Repeat password"
              />
            </label>
            {submitCount > 0 && (
              <ErrorMessage
                name="confirmPassword"
                component="span"
                className={css.errorMessage}
              />
            )}
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
    </div>
  );
};

export default SignUpForm;
