import css from "./UserBar.module.css";
import PropTypes from "prop-types";
import { IoChevronDown } from "react-icons/io5";
import user3 from "../../../assets/img/user3.png";

const UserBar = ({ user, togglePopover, isOpen }) => {
  return (
    <button
      onClick={togglePopover}
      type="button"
      className={`${css.userPanelBtn}  ${isOpen ? css.isActive : ""}`}
    >
      <p className={css.userName}>{user} </p>{" "}
      <img className={css.userImg} src={user3} alt="user3" />
      <IoChevronDown className={css.icon} />
    </button>
  );
};

export default UserBar;

UserBar.propTypes = {
  user: PropTypes.string,
  togglePopover: PropTypes.func,
  isOpen: PropTypes.bool,
};
