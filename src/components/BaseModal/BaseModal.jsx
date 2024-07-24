import css from "./BaseModal.module.css";
import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

export const BaseModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      overlayClassName={css.overlay}
    >
      {children}
    </Modal>
  );
};

BaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default BaseModal;
