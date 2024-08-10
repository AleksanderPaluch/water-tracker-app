import css from "./UserSettingsForm.module.css";
import user1 from "../../../assets/img/user1.png";
import Icon from "../Icon/Icon";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaExclamation } from "react-icons/fa";
import PropTypes from "prop-types"
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  gender: Yup.string().required("Please pick one"),
});

const INITIAL_FORM_DATA = {
  gender: "",
  name: "",
  email: "",
  weight: "",
  avtiveTime: "",
  water: "",
};

const UserSettingsForm = ({ closeModal }) => {
  const username = "Nadia";
  const useremail = "piesciejebal@wp.pl";
  const userweight = 70
  const userActiveTime = 1.5;
  const waterToDrink = 2;
  const usergender = ""


  const handleChanges = async (formData, formActions) => {

    try {
      //  await dispatch(apiAddWater(formData)).unwrap();
      toast.success("Profile Updated!, Your changes have been saved successfully.", {
        duration: 4000,
      });
    } catch (error) {
      toast.error("Failed to update profile", {
        duration: 4000,
      });
    }


    formActions.resetForm();
    closeModal();
  }


  return (
    <div className={css.formBox}>
      <div className={css.avatarBox}>
        <img className={css.userImg} src={user1} alt="user2" />

        <button type="button" className={css.uploadBtn}>
          {" "}
          <Icon width="18" height="18" iconName="upload" styles={css.icon} />
          <p className={css.text}>Upload a photo</p>
        </button>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          ...INITIAL_FORM_DATA,
          gender: usergender,
          name: username,
          email: useremail,
          weight: userweight,
          avtiveTime: userActiveTime,
          water: waterToDrink
        }}
        onSubmit={handleChanges}
      >
        <Form className={css.form}>
          <div className={css.flexBox}>
            <div className={css.dataBox}>
              <p className={css.labelBoldText}>Your gender identity</p>
              <div className={css.genderBox}>
                {" "}
                <label className={css.radioLabel}>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="gender"
                    value="woman"
                  />
                  <span className={css.radioLabelText}>Woman</span>
                </label>
                <label className={css.radioLabel}>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="gender"
                    value="man"
                  />
                  <span className={css.radioLabelText}>Man</span>
                </label>
                <ErrorMessage
                  name="gender"
                  component="span"
                  className={css.errorMessage}
                />
              </div>

              <label className={css.label}>
                <span className={css.labelBoldText}>Your name</span>
                <Field className={css.formInput} type="string" name="name" />
              </label>

              <label className={css.label}>
                <span className={css.labelBoldText}>Email</span>
                <Field className={css.formInput} type="email" name="email" />
              </label>

              <p className={css.labelBoldText}>My daily norma</p>
              <div className={css.genderInfoBox}>
                <p className={css.labelText}>
                  For woman:{" "}
                  <span className={css.span}>V=(M*0,03) + (T*0,4)</span>{" "}
                </p>
                <p className={css.labelText}>
                  For man:{" "}
                  <span className={css.span}>V=(M*0,04) + (T*0,6)</span>{" "}
                </p>
              </div>
              <p className={css.explText}>
                * V is the volume of the water norm in liters per day, M is your
                body weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of
                these, you must set 0)
              </p>
              <p className={css.labelText}>
                {" "}
                <span className={css.exclamation}>
                  <FaExclamation />
                </span>{" "}
                Active time in hours
              </p>
            </div>
            <div className={css.addInfoBox}>
              <label className={css.label}>
                <span className={css.labelText}>Your weight in kilograms:</span>
                <Field className={css.formInput} type="string" name="weight" />
              </label>{" "}
              <label className={css.label}>
                <span className={css.labelText}>
                  The time of active participation in sports:
                </span>
                <Field
                  className={css.formInput}
                  type="string"
                  name="avtiveTime"
                 
                />
              </label>{" "}
              <p className={css.labelText}>
                The required amount of water in liters per day:{" "}
                <span className={css.span}>{waterToDrink}</span>
              </p>
              <label className={css.label}>
                <span className={css.labelBoldText}>
                  Write down how much water you will drink:
                </span>
                <Field
                  className={css.formInput}
                  type="string"
                  name="water"
                  
                />
              </label>
            </div>
          </div>

          <button
            className={css.formBtn}
            type="submit"
            title="click to edit personal info"
            aria-label="edit personal info"
          >
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};


UserSettingsForm.propTypes = {
  closeModal: PropTypes.func
};

export default UserSettingsForm;
