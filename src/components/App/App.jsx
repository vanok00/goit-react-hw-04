import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchArticles } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { ErrorMessage } from "formik";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImage = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { data } = await fetchArticles(page, query);
        setImages((prev) => [...prev, ...data.hits]);
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
    setPage(0);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage>Помилка завантаження зображень</ErrorMessage>
      )}{" "}
      {images.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
