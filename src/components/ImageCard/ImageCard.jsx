const ImageCard = ({ image, modalContent }) => {
  return (
    <div onClick={() => modalContent(image.urls.regular)}>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;
