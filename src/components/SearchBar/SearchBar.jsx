import { Field, Form, Formik } from "formik";
import styles from "./SearchBar.module.css";
const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query);
  };

  return (
    <div className={styles.searchBar}>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field
              name="query"
              type="text"
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default SearchBar;
