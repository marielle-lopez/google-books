import styles from "./Header.module.scss";

import SearchBar from "../../components/SearchBar/SearchBar";

const Header = ({ setSearchTerm }) => {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.page_heading}>The Library</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
