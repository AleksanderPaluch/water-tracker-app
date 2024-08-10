import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./DeleteWaterModal.module.css";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const DeleteWaterModal = ({ closeModal }) => {
  // const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      //  await dispatch(apiAddWater(formData)).unwrap();
      toast.success("The specified amount of water has been removed.", {
        duration: 4000,
      });
    } catch (error) {
      toast.error(
        "There was an issue processing your request. Please try again later",
        {
          duration: 4000,
        }
      );
    }
    closeModal();
  };

  return (
    <div className={css.deleteBox}>
      <button type="button" onClick={closeModal} className={css.iconExitBtn}>
        {" "}
        <Icon width="24" height="24" iconName="x" className={css.iconExit} />
      </button>
      <p className={css.title}>Delete entry</p>
      <p className={css.text}>Are you sure you want to delete the entry?</p>
      <div className={css.buttonsBox}>
        <button onClick={handleDelete} className={css.deleteBtn}>
          Delete
        </button>
        <button onClick={closeModal()} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
};

DeleteWaterModal.propTypes = {
  closeModal: PropTypes.func,
};

export default DeleteWaterModal;
