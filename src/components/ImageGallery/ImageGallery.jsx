import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal, modalContent }) => {
  return (
    <ul className={styles.imageContainer}>
      {images.map((image) => (
        <li key={image.id} onClick={openModal}>
          <ImageCard image={image} modalContent={modalContent} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
