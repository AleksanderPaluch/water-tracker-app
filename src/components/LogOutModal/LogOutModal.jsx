import Icon from "../Icon/Icon";
import css from "./LogOutModal.module.css"

const LogOutModal = ({ closeModal }) => {
    return (
        <div className={css.deleteBox}>
          <button type="button" onClick={closeModal} className={css.iconExitBtn}>
            {" "}
            <Icon width="24" height="24" iconName="x" className={css.iconExit} />
          </button>
          <p className={css.title}>Delete entry</p>
          <p className={css.text}>Do you really want to leave?</p>
          <div className={css.buttonsBox}>
            <button className={css.deleteBtn}>Log out</button>
            <button className={css.cancelBtn}>Cancel</button>
          </div>
        </div>
      );
}

export default LogOutModal
