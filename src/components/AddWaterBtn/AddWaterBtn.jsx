import { useState } from "react";
import BaseModal from "../BaseModal/BaseModal";
import Icon from "../Icon/Icon";
import css from "./AddWaterBtn.module.css";
import PropTypes from "prop-types";

const AddWaterBtn = ({ isBig = true }) => {
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
      <button
        onClick={openModal}
        className={isBig ? css.addWaterBtn : css.smallAddWaterBtn}
      >
        {isBig ? (
          <Icon width="16" height="16" iconName="plus" styles={css.plusIcon} />
        ) : (
          <Icon width="16" height="16" iconName="plus2" styles={css.plusIcon} />
        )}
        Add Water
      </button>
      <BaseModal isOpen={modalIsOpen} onClose={closeModal}></BaseModal>
    </>
  );
};

export default AddWaterBtn;

AddWaterBtn.propTypes = {
  isBig: PropTypes.bool,
};
