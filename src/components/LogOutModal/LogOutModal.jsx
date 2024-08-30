import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./LogOutModal.module.css";
import { apiLogOutUser } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { logOutUserLocally } from "../../redux/auth/slice";
import { logOutUser } from "../../redux/user/slice";
import { logOutWaterState } from "../../redux/water/slice";

const LogOutModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await dispatch(apiLogOutUser()).unwrap();
    } catch (error) {
      console.log(error);
      try {
        await dispatch(logOutUserLocally());
        console.log("local Log-Out");

      } catch (error) {
        console.log(error);
        console.log("failed to logout locally");
      }
    }
    dispatch(logOutUser())
    dispatch(logOutWaterState)
    closeModal();
    navigate("/");
    toast.success("You have been signed out. See you next time!", {
      duration: 4000,
    });
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
