import Card from "../../components/Card/Card";

const SearchResults = ({ books }) => {
  return (
    <div>
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
