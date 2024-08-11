import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./WaterModal.module.css";
import PropTypes from "prop-types";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from "react";
import Icon from "../Icon/Icon";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


const validationSchema = Yup.object().shape({
  water: Yup.number()
    .required("Please enter a valid number")
    .typeError("Please enter a valid number")
    .min(50, "The minimum amount is 50 ml")
    .max(1000, "The maximum amount is 1000 ml"),
});

const INITIAL_FORM_DATA = {
  time: "",
  water: "",
};

const WaterModal = ({ isEdit = false, closeModal, editTime, editAmount }) => {
  const [amount, setAmount] = useState(150);
  const dispatch = useDispatch();
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleAddingWater = async (formData, formActions) => {
  
    try {
      //  await dispatch(apiAddWater(formData)).unwrap();
      toast.success("Amount of water has been added", {
        duration: 4000,
      });
    } catch (error) {
      toast.error("Failed to add water", {
        duration: 4000,
      });
    }
    formActions.resetForm();
    closeModal();
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
          time: isEdit ? editTime : new Date(),
          water: isEdit ? editAmount : amount,
        }}
        onSubmit={handleAddingWater}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <p className={css.labelText}>Amount of water:</p>
            <div className={css.calcBox}>
              <button
                type="button"
                onClick={() => {
                  const newAmount = Math.max(amount - 50, 50);
                  setAmount(newAmount);
                  setFieldValue("water", newAmount);
                }}
                className={css.calcBtn}
              >
                <CiCircleMinus className={css.icon} />
              </button>
              <div className={css.waterAmountBox}>
                {isEdit ? editAmount : amount}
              </div>
              <button
                type="button"
                onClick={() => {
                  const newAmount = Math.min(amount + 50, 1000);
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
                value={getCurrentTime()}
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
            <ErrorMessage
              name="water"
              component="span"
              className={css.errorMessage}
            />
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
  closeModal: PropTypes.func,
  editTime: PropTypes.string,
  editAmount: PropTypes.number,
};

export default WaterModal;
