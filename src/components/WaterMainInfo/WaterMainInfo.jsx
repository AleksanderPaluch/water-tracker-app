import { useState } from "react";
import BaseModal from "../BaseModal/BaseModal";
import Icon from "../Icon/Icon";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import css from "./WaterMainInfo.module.css";

const WaterMainInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={css.waterInfoBox}>
      <WaterDailyNorma />
      <WaterProgressBar />

      <button onClick={openModal} className={css.addWaterBtn}>
       
        <Icon width="16" height="16" iconName="plus" styles={css.plusIcon} />
        Add Water
      </button>
      <BaseModal isOpen={modalIsOpen} onClose={closeModal}></BaseModal>
    </div>
  );
};

export default WaterMainInfo;
