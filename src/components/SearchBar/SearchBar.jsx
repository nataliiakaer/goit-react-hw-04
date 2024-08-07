import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
        className={css.input}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
