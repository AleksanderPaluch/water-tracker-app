import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./UserPopover.module.css";
import BaseModal from "../BaseModal/BaseModal";
import LogOutModal from "../LogOutModal/LogOutModal";

const UserPopover = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleButtonClick = (modalName) => {
    setActiveModal(modalName);
  };

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <>
      {" "}
      <div className={css.userPopoverBox}>
        <button
          type="button"
          onClick={() => handleButtonClick("settings")}
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
          onClick={() => handleButtonClick("log-out")}
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
      {activeModal === "settings" && (
        <BaseModal isOpen={true} onClose={closeModal}>
          {" "}
          settings modal
        </BaseModal>
      )}
      {activeModal === "log-out" && (
        <BaseModal onClose={closeModal} isOpen={true}>
          {" "}
          <LogOutModal closeModal={closeModal} />{" "}
        </BaseModal>
      )}
    </>
  );
};

export default UserPopover;
