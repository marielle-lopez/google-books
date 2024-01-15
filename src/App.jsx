import "./App.scss";
import { useState, useEffect } from "react";

import { getBooks } from "./data/getBooks";
import Header from "./containers/Header/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }

    setLoading(true);

    const wrapper = async () => {
      const data = await getBooks(searchTerm);
      setBooks(data);
    };

    wrapper();

    setLoading(false);
  }, [searchTerm]);

  console.log(books);

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      {!loading &&
        books &&
        books.map((book) => <p key={book.id}>{book.title}</p>)}
    </>
  );
}

export default App;
