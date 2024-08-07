import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./LogOutModal.module.css"
import { apiLogOutUser } from "../../redux/auth/operations";

const LogOutModal = ({ closeModal }) => {

  const handleLogOut = () => {
    dispatch(apiLogOutUser())
    closeModal()
  }

  const dispatch = useDispatch()

    return (
        <div className={css.deleteBox}>
          <button type="button" onClick={closeModal} className={css.iconExitBtn}>
            {" "}
            <Icon width="24" height="24" iconName="x" className={css.iconExit} />
          </button>
          <p className={css.title}>Delete entry</p>
          <p className={css.text}>Do you really want to leave?</p>
          <div className={css.buttonsBox}>
            <button onClick={handleLogOut} className={css.deleteBtn}>Log out</button>
            <button onClick={closeModal} className={css.cancelBtn}>Cancel</button>
          </div>
        </div>
      );
}

export default LogOutModal
