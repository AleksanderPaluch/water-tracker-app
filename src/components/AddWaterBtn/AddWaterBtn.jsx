import { useState } from "react";
import BaseModal from "../BaseModal/BaseModal";
import Icon from "../Icon/Icon";
import css from "./AddWaterBtn.module.css";
import PropTypes from "prop-types";
import WaterModal from "../WaterModal/WaterModal";

const AddWaterBtn = ({ isBig = true, date }) => {
  
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
          <Icon
            width="16"
            height="16"
            iconName="plus"
            styles={css.plusIconSmall}
          />
        )}
        Add Water
      </button>
      <BaseModal isOpen={modalIsOpen} onClose={closeModal}>
        <WaterModal closeModal={closeModal} date={date} />
      </BaseModal>
    </>
  );
};

export default AddWaterBtn;

AddWaterBtn.propTypes = {
  isBig: PropTypes.bool,
};
