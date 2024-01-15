import styles from "./Header.module.scss";

import SearchBar from "../../components/SearchBar/SearchBar";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.page_heading}>The Library</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
