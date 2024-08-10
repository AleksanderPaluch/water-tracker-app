import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./WaterItem.module.css";
import BaseModal from "../BaseModal/BaseModal";
import WaterModal from "../WaterModal/WaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";

const WaterItem = ({ amount, time }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  function openEditModal() {
    setIsEditOpen(true);
  }

  function closeEditModal() {
    setIsEditOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteOpen(true);
  }

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  return (
    <div className={css.waterItemBox}>
      <Icon width="38" height="38" iconName="glass" styles={css.glass} />
      <div className={css.textBox}>
        <p className={css.text}>{amount}ml</p>
        <p className={css.text}>{time} </p>
      </div>
      <div className={css.iconsBox}>
        <button
          className={css.iconBtn}
          type="button"
          onClick={() => openEditModal()}
        >
          {" "}
          <Icon width="14" height="14" iconName="edit" styles={css.icons} />
        </button>
        <button
          className={css.iconBtn}
          type="button"
          onClick={() => openDeleteModal()}
        >
          {" "}
          <Icon width="14" height="14" iconName="trash" styles={css.icons} />
        </button>
      </div>
      {isEditOpen && (
        <BaseModal isOpen={true} onClose={closeEditModal}>
          <WaterModal
            isEdit={true}
            editTime={time}
            editAmount={amount}
            closeModal={closeEditModal}
          />
        </BaseModal>
      )}
      {isDeleteOpen && (
        <BaseModal isOpen={true} onClose={closeDeleteModal}>
          <DeleteWaterModal closeModal={closeDeleteModal} />
        </BaseModal>
      )}
    </div>
  );
};

export default WaterItem;
