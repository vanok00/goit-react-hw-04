import styles from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
