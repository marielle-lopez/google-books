import styles from "./SearchBar.module.scss";

import { useRef } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const inputVal = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputVal.current.value);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.text_input}
        type="text"
        ref={inputVal}
        placeholder="What book are you looking for?"
      />
      <button className={styles.btn} type="submit">
        <img
          className={styles.btn_icon}
          src="src\assets\search.png"
          alt="Search icon"
        />
      </button>
    </form>
  );
};

export default SearchBar;
