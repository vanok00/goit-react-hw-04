import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import styles from "./SearchBar.module.css";
const SearchBar = () => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query);
  };

  return (
    <div>
      <header>
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
