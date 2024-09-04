import PropTypes from "prop-types";
import css from "./WaterModal.module.css";
import Icon from "../Icon/Icon";
import { useDispatch } from "react-redux";
import {
  apiAddWater,
  apiEditWater,
  apiGetDailyWater,
} from "../../redux/water/operations";
import WaterForm from "../WaterForm/WaterForm"; // Імпорт нового компоненту форми
import CustomToast from "../Toasts/CustomToast/CustomToast";

const INITIAL_FORM_DATA = {
  time: "",
  water: "",
};

const WaterModal = ({
  isEdit = false,
  closeModal,
  editTime,
  editAmount,
  id,
  date,
}) => {
  const day = date?.day;
  const month = date?.month;
  const year = date?.year;
  const fullDate = date?.fullDate;

  const dispatch = useDispatch();
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleAddingWater = async (formData, formActions) => {
    if (isEdit) {
      try {
        await dispatch(apiEditWater({ ...formData, id })).unwrap();
        await dispatch(
          apiGetDailyWater({ day, month, year, fullDate })
        ).unwrap();
        CustomToast(true, "Amount of water has been edited");
      } catch (error) {
        CustomToast(false, "Failed to edit water");
      }
    } else {
      try {
        await dispatch(
          apiAddWater({ ...formData, day, month, year, fullDate })
        ).unwrap();
        await dispatch(
          apiGetDailyWater({ day, month, year, fullDate })
        ).unwrap();
        CustomToast(true, "Amount of water has been added");
      } catch (error) {
        CustomToast(false, "Failed to add water");
      }
    }

    formActions.resetForm();
    closeModal();
  };

  return (
    <div className={css.waterModalBox}>
      <button type="button" onClick={closeModal} className={css.iconExitBtn}>
        <Icon width="24" height="24" iconName="x" className={css.iconExit} />
      </button>

      <p className={css.title}>
        {!isEdit ? "Add water" : "Edit the entered amount of water"}
      </p>
      <p className={css.text}>
        {!isEdit ? "Choose a value" : "Correct entered data:"}
      </p>

      <WaterForm
        isEdit={isEdit}
        initialValues={{
          ...INITIAL_FORM_DATA,
          time: isEdit ? editTime : getCurrentTime(),
          water: isEdit ? editAmount : 150,
        }}
        onSubmit={handleAddingWater}
        editAmount={editAmount}
      />
    </div>
  );
};

WaterModal.propTypes = {
  isEdit: PropTypes.bool,
  closeModal: PropTypes.func,
  editTime: PropTypes.string,
  editAmount: PropTypes.number,
  id: PropTypes.any,
  date: PropTypes.object,
};

export default WaterModal;
