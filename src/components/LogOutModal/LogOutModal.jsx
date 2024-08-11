import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./LogOutModal.module.css";
import { apiLogOutUser } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const LogOutModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await dispatch(apiLogOutUser()).unwrap();
    } catch (error) {
      console.log(error);
    }
    const persistedState = localStorage.getItem("persist:root");
    console.log('persistedState: ', persistedState);

   
    if (persistedState) {
      const parsedState = JSON.parse(persistedState);
      console.log(parsedState.auth);
      if (parsedState.auth) {
        parsedState.auth = JSON.stringify({
          ...JSON.parse(parsedState.auth),
          token: null,
        });
        localStorage.setItem("persist:root", JSON.stringify(parsedState));
        console.log("User logged out, token set to null");
      }
    }
    navigate("/");
    toast.success("You have been signed out. See you next time!", {
      duration: 5000,
    });
    closeModal();
  };

  return (
    <div className={css.deleteBox}>
      <button type="button" onClick={closeModal} className={css.iconExitBtn}>
        {" "}
        <Icon width="24" height="24" iconName="x" className={css.iconExit} />
      </button>
      <p className={css.title}>Delete entry</p>
      <p className={css.text}>Do you really want to leave?</p>
      <div className={css.buttonsBox}>
        <button onClick={handleLogOut} className={css.deleteBtn}>
          Log out
        </button>
        <button onClick={closeModal} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </div>
  );
};

LogOutModal.propTypes = {
  closeModal: PropTypes.func,
};

export default LogOutModal;
