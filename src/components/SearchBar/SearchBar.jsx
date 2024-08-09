import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    
    const handleSubmit = (evt) => {
      evt.preventDefault();
      // const form = evt;
      // console.log(form);
      // const topic = form.elements.topic.value;
      // console.log(topic);
      
      // // Якщо текстове поле порожнє, виводимо повідомлення 
      // // і припиняємо виконання функції.
      // if(form.elements.topic.value.trim() === "") {
      //   alert("Please enter search term!")
      //   return;
      // }
  
      // // У протилежному випадку викликаємо пропс 
      // // і передаємо йому значення поля
      // onSearch(topic);
      // form.reset();
    };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
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
