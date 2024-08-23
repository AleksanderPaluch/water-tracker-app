import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./WaterItem.module.css";
import BaseModal from "../BaseModal/BaseModal";
import WaterModal from "../WaterModal/WaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";

const WaterItem = ({ amount, time, id, date }) => {
  
  const [deleteModalIsOpen, setdeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, seteditModalIsOpen] = useState(false);

  function openModal() {
    setdeleteModalIsOpen(true);
  }

  function closeModal() {
    setdeleteModalIsOpen(false);
  }

  function openEditModal() {
    seteditModalIsOpen(true);
  }

  function closeEditModal() {
    seteditModalIsOpen(false);
  }

  return (
    <div className={css.waterItemBox}>
      <Icon width="38" height="38" iconName="glass" styles={css.glass} />
      <div className={css.textBox}>
        <p className={css.text}>{amount}ml</p>
        <p className={css.text}>{time} </p>
      </div>
      <div className={css.iconsBox}>
        <button className={css.iconBtn} type="button" onClick={openEditModal}>
          {" "}
          <Icon width="14" height="14" iconName="edit" styles={css.icons} />
        </button>
        <button className={css.iconBtn} type="button" onClick={openModal}>
          {" "}
          <Icon width="14" height="14" iconName="trash" styles={css.icons} />
        </button>
      </div>

      <BaseModal isOpen={editModalIsOpen} onClose={closeEditModal}>
        <WaterModal
          isEdit={true}
          editTime={time}
          editAmount={amount}
          closeModal={closeEditModal}
          id={id}
          date={date}
        />
      </BaseModal>

      <BaseModal isOpen={deleteModalIsOpen} onClose={closeModal}>
        <DeleteWaterModal closeModal={closeModal} id={id}    date={date}/>
      </BaseModal>
    </div>
  );
};

export default WaterItem;
