import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./WaterItem.module.css";
import BaseModal from "../BaseModal/BaseModal";
import WaterModal from "../WaterModal/WaterModal";

const WaterItem = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleButtonClick = (modalName) => {
    setActiveModal(modalName);
  };

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <div className={css.waterItemBox}>
      <Icon width="38   " height="38" iconName="glass" styles={css.glass} />
      <div className={css.textBox}>
        <p className={css.text}>250 ml</p>
        <p className={css.text}>7:00 AM</p>
      </div>
      <div className={css.iconsBox}>
        <button
          className={css.iconBtn}
          type="button"
          onClick={() => handleButtonClick("edit")}
        >
          {" "}
          <Icon width="14" height="14" iconName="edit" styles={css.icons} />
        </button>
        <button
          className={css.iconBtn}
          type="button"
          onClick={() => handleButtonClick("delete")}
        >
          {" "}
          <Icon width="14" height="14" iconName="trash" styles={css.icons} />
        </button>
      </div>
      {activeModal === "edit" && (
        <BaseModal isOpen={true} onClose={closeModal}>
       <WaterModal isEdit={true} />
        </BaseModal>
      )}
      {activeModal === "delete" && (
        <BaseModal isOpen={true} onClose={closeModal}>
          {" "}
          delete modal
        </BaseModal>
      )}
      
    </div>
  );
};

export default WaterItem;
