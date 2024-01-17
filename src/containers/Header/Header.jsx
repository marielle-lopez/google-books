import styles from "./Header.module.scss";

import SearchBar from "../../components/SearchBar/SearchBar";

const Header = ({ setSearchTerm }) => {
  return (
    <header className={styles.wrapper}>
      <h1>
        <a className={styles.page_heading} href="/">
          The Library
        </a>
      </h1>
      <SearchBar setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
