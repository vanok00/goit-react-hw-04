// import styles from "./ImageGallery.module.css";
// import ImageCard from "../ImageCard/ImageCard";

// const ImageGallery = ({ images, modalContent }) => {
//   return (
//     <ul className={styles.imageContainer}>
//       {images.map((image) => (
//         <li key={image.id}>
//           <ImageCard image={image} modalContent={modalContent} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;

import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, handleOpenImage }) => {
  return (
    <ul className={styles.imageContainer}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} handleOpenImage={handleOpenImage} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
