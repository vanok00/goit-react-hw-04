import Modal from "react-modal";
import styles from "./ImageModal.module.css";
const ImageModal = ({ openModal, closeModal, src, alt }) => {
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Example Modal"
      >
        <div>
          <img className={styles.ImageModal} src={src} alt={alt} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
