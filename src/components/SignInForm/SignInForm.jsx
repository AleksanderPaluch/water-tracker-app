import css from "./SignInForm.module.css";
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
  .required("Password is required"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const SignInForm = () => {
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
          formActions.resetForm();
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
