import Icon from "../Icon/Icon";
import css from "./DeleteWaterModal.module.css";

const DeleteWaterModal = ({ closeModal }) => {
  return (
    <div className={css.deleteBox}>
      <button type="button" onClick={closeModal} className={css.iconExitBtn}>
        {" "}
        <Icon width="24" height="24" iconName="x" className={css.iconExit} />
      </button>
      <p className={css.title}>Delete entry</p>
      <p className={css.text}>Are you sure you want to delete the entry?</p>
      <div className={css.buttonsBox}>
        <button className={css.deleteBtn}>Delete</button>
        <button className={css.cancelBtn}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
