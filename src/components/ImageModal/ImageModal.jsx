import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { useEffect } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ openModal, closeModal, src, alt }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Example Modal"
        overlayClassName={styles.overlay}
      >
        <div>
          <img className={styles.ImageModal} src={src} alt={alt} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
