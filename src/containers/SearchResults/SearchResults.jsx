import styles from "./SearchResults.module.scss";
import Card from "../../components/Card/Card";

const SearchResults = ({ books, resultsCount, searchTerm }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.search_results_info}>
        Top 40 of {resultsCount} search results for "{searchTerm}"
      </p>
      <div className={styles.grid}>
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
    </div>
  );
};

export default SearchResults;
