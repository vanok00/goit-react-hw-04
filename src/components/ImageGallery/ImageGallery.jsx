import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={styles.imageContainer}>
        {images.map((item) => (
          <li key={item.id}>
            <a href={item.links.html} target="_blank" rel="noopener noreferrer">
              <img
                src={item.urls.small}
                alt={item.alt_description || "Image"}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
