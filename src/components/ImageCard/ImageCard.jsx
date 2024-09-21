const ImageCard = ({ image, handleOpenImage }) => {
  return (
    <div onClick={() => handleOpenImage(image.urls.regular)}>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;
