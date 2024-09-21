import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";
const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    if (!values.query) {
      toast.error("Sorry, your input field can`t be empty!", {
        style: {
          color: "red",
        },
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    setQuery(values.query);
  };

  return (
    <div>
      <header className={styles.header}>
        <Toaster />
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={styles.searchBar}>
            <button type="submit" className={styles.searchBtn}>
              <FaMagnifyingGlass />
            </button>
            <Field
              className={styles.searchInput}
              name="query"
              type="text"
              placeholder="Search images and photos"
            />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default SearchBar;
