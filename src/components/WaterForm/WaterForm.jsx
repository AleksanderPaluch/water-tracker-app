import { Formik, Form, Field, ErrorMessage } from "formik";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import * as Yup from "yup";
import css from "./WaterForm.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  water: Yup.number()
    .required("Please enter a valid number")
    .typeError("Please enter a valid number")
    .min(50, "The minimum amount is 50 ml")
    .max(1000, "The maximum amount is 1000 ml"),
});

const WaterForm = ({
  isEdit = false,
  initialValues,
  onSubmit,
  editAmount,
  
}) => {
  const [amount, setAmount] = useState(editAmount || 150);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
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
            <Field className={css.formInput} type="time" name="time" />
          </label>
          <label className={css.label}>
            <span className={css.labelBoldText}>
              Enter the value of the water used:
            </span>
            <Field
              className={css.formInput}
              type="number"
              name="water"
              autoComplete="off"
              step="50"
              value={amount}
              onChange={(e) => {
                const newAmount = Math.min(
                  Math.max(Number(e.target.value), 50),
                  1000
                );
                setAmount(newAmount);
                setFieldValue("water", newAmount);
              }}
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
  );
};

WaterForm.propTypes = {
  isEdit: PropTypes.bool,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  editAmount: PropTypes.number,
};

export default WaterForm;
