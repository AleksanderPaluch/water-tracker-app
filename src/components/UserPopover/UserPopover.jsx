import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./UserPopover.module.css";
import BaseModal from "../BaseModal/BaseModal";
import LogOutModal from "../LogOutModal/LogOutModal";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal";

const UserPopover = () => {
  const [settingsModalActive, setSettingsModalActive] = useState(false);
  const [logoutModalActive, setlogoutModalActive] = useState(false);

  const openSettingsModal = () => {
    setSettingsModalActive(true);
  };

  function closeSettingsModal() {
    setSettingsModalActive(false);
  }

  const openLogoutModal = () => {
    setlogoutModalActive(true);
  };

  function closeLogoutModal() {
    setlogoutModalActive(false);
  }

  return (
    <>
      {" "}
      <div className={css.userPopoverBox}>
        <button
          type="button"
          onClick={openSettingsModal}
          className={css.userPopoverBtn}
        >
          {" "}
          <Icon
            width="16"
            height="16"
            iconName="settings"
            styles={css.icon}
          />{" "}
          Setting{" "}
        </button>
        <button
          type="button"
          onClick={openLogoutModal}
          className={css.userPopoverBtn}
        >
          {" "}
          <Icon
            width="16"
            height="16"
            iconName="log-out"
            styles={css.icon2}
          />{" "}
          Log out{" "}
        </button>
      </div>
      <BaseModal isOpen={settingsModalActive} onClose={closeSettingsModal}>
        <UserSettingsModal closeModal={closeSettingsModal} />
      </BaseModal>
      <BaseModal onClose={closeLogoutModal} isOpen={logoutModalActive}>
        {" "}
        <LogOutModal closeModal={closeLogoutModal} />{" "}
      </BaseModal>
    </>
  );
};

export default UserPopover;
