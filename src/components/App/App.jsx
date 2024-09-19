import { useEffect, useState } from "react";
import { fetchArticles } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1); // Починаємо з першої сторінки
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return; // Якщо немає запиту, не виконуємо пошук

    const getImage = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        setImages((prev) => [...prev, ...data.results]);
        console.log(data.results);
      } catch (error) {
        console.error(error);
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
    setPage(1); // Повертаємо на першу сторінку після зміни запиту
  };

  return (
    <div className={styles.container}>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage>Помилка завантаження зображень</ErrorMessage>}
      {images.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
