import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./UserPopover.module.css";
import BaseModal from "../BaseModal/BaseModal";

const UserPopover = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {" "}
      <div className={css.userPopoverBox}>
        <button
          type="button"
          onClick={openModal}
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
          onClick={openModal}
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
      <BaseModal isOpen={modalIsOpen} onClose={closeModal}></BaseModal>
    </>
  );
};

export default UserPopover;
