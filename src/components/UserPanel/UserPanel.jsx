import css from "./UserPanel.module.css";
import { useState } from "react";
import UserPopover from "../UserPopover/UserPopover";
import UserBar from "../UserBar/UserBar";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";

const UserPanel = () => {
  const user = useSelector(selectUser);

  const username = user?.name; // Перевірка на наявність user
  const userEmail = user?.email ? user.email.split('@')[0] : ''; // Перевірка на наявність email
  const userAvatar = user?.avatarURL
  

  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.userPanelBox}>
      <div className={css.welcomeBox}>
        <p className={css.welcomeText}>
          Hello, <span className={css.welcomeName}>{username ? username : userEmail}!</span>
        </p>
      </div>

      <div className={css.userPopoverContainer}>
        <UserBar
          user={username}
          togglePopover={togglePopover}
          isOpen={isOpen}
          avatar={userAvatar}
        />

        {isOpen && <UserPopover />}
      </div>
    </div>
  );
};

export default UserPanel;
