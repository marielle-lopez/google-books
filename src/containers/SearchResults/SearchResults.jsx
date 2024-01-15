import styles from "./SearchResults.module.scss";
import Card from "../../components/Card/Card";

const SearchResults = ({ books }) => {
  return (
    <div className={styles.wrapper}>
      {books.map((book) => (
        <Card
          key={book.id}
          title={book.title}
          authors={book.authors}
          description={book.description}
          imageURL={book.imageURL}
        />
      ))}
    </div>
  );
};

export default SearchResults;
