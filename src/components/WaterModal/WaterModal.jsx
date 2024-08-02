import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./WaterModal.module.css";
import PropTypes from "prop-types";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from "react";
import Icon from "../Icon/Icon";

const validationSchema = Yup.object().shape({
  water: Yup.number().required("Please enter a valid number"),
});

const INITIAL_FORM_DATA = {
  time: "",
  water: "",
};

const WaterModal = ({ isEdit = false, closeModal }) => {
  const [amount, setAmount] = useState(250);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={css.waterModalBox}>
      <button type="button" onClick={closeModal} className={css.iconExitBtn}>
        {" "}
        <Icon width="24" height="24" iconName="x" className={css.iconExit} />
      </button>

      <p className={css.title}>
        {!isEdit ? "Add water" : "Edit the entered amount of water"}
      </p>
      <p className={css.text}>
        {!isEdit ? "Choose a value" : "Correct entered data:"}
      </p>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          ...INITIAL_FORM_DATA,
          time: getCurrentTime(),
          water: amount,
        }}
        onSubmit={(formData, formActions) => {
          console.log(formData);
          formActions.resetForm();
          closeModal()
        }}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
             <p className={css.labelText}>Amount of water:</p>
            <div className={css.calcBox}>
             
              <button
                type="button"
                onClick={() => {
                  const newAmount = amount - 50;
                  setAmount(newAmount);
                  setFieldValue("water", newAmount);
                }}
                className={css.calcBtn}
              >
                <CiCircleMinus className={css.icon} />
              </button>
              <div className={css.waterAmountBox}>{amount}</div>
              <button
                type="button"
                onClick={() => {
                  const newAmount = amount + 50;
                  setAmount(newAmount);
                  setFieldValue("water", newAmount);
                }}
                className={css.calcBtn}
              >
                <CiCirclePlus className={css.icon} />
              </button>
            </div>
            <label className={css.label}>
              <span className={css.labelText}>Recording time:</span>
              <Field
                className={css.formInput}
                type="string"
                name="time"
                readOnly
              />
            </label>
            <label className={css.label}>
              <span className={css.labelBoldText}>
                Enter the value of the water used:
              </span>
              <Field
                className={css.formInput}
                type="string"
                name="water"
                autoComplete="off"
              />
            </label>
            <button
              className={css.formBtn}
              type="submit"
              title="click to add amount of water"
              aria-label="add amount of water"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

WaterModal.propTypes = {
  isEdit: PropTypes.bool,
  closeModal: PropTypes.func
};

export default WaterModal;
