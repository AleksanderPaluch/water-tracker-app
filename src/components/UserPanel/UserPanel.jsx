import css from "./UserPanel.module.css";
import { useState } from "react";
import UserPopover from "../UserPopover/UserPopover";
import UserBar from "../UserBar/UserBar";

const UserPanel = () => {
  const username = "Nadia";

  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.userPanelBox}>
      <div className={css.welcomeBox}>
        <p className={css.welcomeText}>
          Hello <span className={css.welcomeName}>, {username}!</span>
        </p>
      </div>

      <div className={css.userPopoverContainer}>
        <UserBar
          user={username}
          togglePopover={togglePopover}
          isOpen={isOpen}
        />

        {isOpen && <UserPopover />}
      </div>
    </div>
  );
};

export default UserPanel;
