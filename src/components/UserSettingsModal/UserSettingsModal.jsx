import { useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm";
import css from "./UserSettingsModal.module.css";
import PropTypes from "prop-types";
import { selectIsLoading } from "../../redux/user/selectors";
import Loader from "../Loader/Loader";

const UserSettingsModal = ({ closeModal }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.settingsBox}>
          <p className={css.title}>Settings</p>
          <button
            type="button"
            onClick={closeModal}
            className={css.iconExitBtn}
          >
            {" "}
            <Icon width="28" height="28" iconName="x" styles={css.iconExit} />
          </button>

          <UserSettingsForm closeModal={closeModal} />
        </div>
      )}
    </>
  );
};

UserSettingsModal.propTypes = {
  closeModal: PropTypes.func,
};

export default UserSettingsModal;
