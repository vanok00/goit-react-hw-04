const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank"></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
