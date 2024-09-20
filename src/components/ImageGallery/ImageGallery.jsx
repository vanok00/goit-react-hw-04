import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={styles.imageContainer}>
        {images.map((item) => (
          <li key={item.id}>
            <img src={item.urls.small} alt={item.alt_description || "Image"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
