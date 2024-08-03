import css from "./UserSettingsForm.module.css";
import user1 from "../../../assets/img/user1.png";
import Icon from "../Icon/Icon";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({});

const INITIAL_FORM_DATA = {
  gender: "",
  name: "",
  email: "",
  weight: "",
  active: "",
  water: "",
};

const UserSettingsForm = ({ closeModal }) => {
  return (
    <div className={css.formBox}>
      <div className={css.avatarBox}>
        <img className={css.userImg} src={user1} alt="user2" />
        <div className={css.uploadBox}>
          <button type="button" className={css.uploadBtn}>
            {" "}
            <Icon width="18" height="18" iconName="upload" styles={css.icon} />
          </button>
          <p className={css.text}>Upload a photo</p>
        </div>
      </div>
      <Formik
        valvalidationSchema={validationSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={(formData) => {
          console.log(formData);
          closeModal();
        }}
      >
        <Form className={css.form}>
          <div className={css.genderBox}>
            {" "}
            <p className={css.labelBoldText}>Your gender identity</p>
            <label className={css.label}>
              <span className={css.labelText}>Woman</span>
              <Field className={css.radioInput} type="radio" name="gender" />
            </label>
            <label className={css.label}>
              <span className={css.labelText}>Man</span>
              <Field className={css.radioInput} type="radio" name="gender" />
            </label>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserSettingsForm;
