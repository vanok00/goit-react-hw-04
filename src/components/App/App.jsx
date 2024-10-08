import { useEffect, useState } from "react";
import { fetchArticles } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import toast from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [alt, setAlt] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const getImage = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        if (data.results.length === 0) {
          toast.error("Sorry, there are no images found for your search!", {
            position: "top-right",
            duration: 3000,
          });
          return;
        }
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImage();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOpenImage = (src, alt) => {
    setModalImage(src);
    setAlt(alt);
    setIsOpen(true);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenImage={handleOpenImage} />
      )}
      {isLoading && <Loader />}
      {isError && query && <ErrorMessage />}
      {images.length > 0 && !isLoading && !isError && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        openModal={modalIsOpen}
        closeModal={closeModal}
        src={modalImage}
        alt={alt}
      />
    </>
  );
};

export default App;
