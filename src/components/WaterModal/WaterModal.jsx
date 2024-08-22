
import PropTypes from "prop-types";
import css from "./WaterModal.module.css";
import Icon from "../Icon/Icon";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { apiAddWater, apiEditWater } from "../../redux/water/operations";
import WaterForm from "../WaterForm/WaterForm"; // Імпорт нового компоненту форми

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
  date
}) => {
  const dispatch = useDispatch();

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleAddingWater = async (formData, formActions) => {
    if (isEdit) {
      try {
        await dispatch(apiEditWater({ ...formData, id, date })).unwrap();
        toast.success("Amount of water has been edited", {
          duration: 4000,
        });
      } catch (error) {
        toast.error("Failed to edit water", {
          duration: 4000,
        });
      }
    } else {
      try {
        await dispatch(apiAddWater(...formData, date)).unwrap();
        toast.success("Amount of water has been added", {
          duration: 4000,
        });
      } catch (error) {
        toast.error("Failed to add water", {
          duration: 4000,
        });
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
        date={date}
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
};

export default WaterModal;
