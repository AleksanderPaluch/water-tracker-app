import css from "./ForgotPasswordForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const INITIAL_FORM_DATA = {
  email: "",
};

const ForgotPasswordForm = () => {
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
            <h1 className={css.formTitle}>Forgot your password?</h1>
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

export default ForgotPasswordForm;
