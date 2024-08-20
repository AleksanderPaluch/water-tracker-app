import css from "./UserBar.module.css";
import PropTypes from "prop-types";
import { IoChevronDown } from "react-icons/io5";


const UserBar = ({ username, togglePopover, isOpen, avatar }) => {
  return (
    <button
      onClick={togglePopover}
      type="button"
      className={`${css.userPanelBtn}  ${isOpen ? css.isActive : ""}`}
    >
      <p className={css.userName}>{username} </p>{" "}
      <img className={css.userImg} src={avatar} alt="avatar" />
      <IoChevronDown className={css.icon} />
    </button>
  );
};

export default UserBar;

UserBar.propTypes = {
  username: PropTypes.string,
  togglePopover: PropTypes.func,
  isOpen: PropTypes.bool,
  avatar: PropTypes.string
};
