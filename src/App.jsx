import "./App.scss";
import { useState, useEffect } from "react";

import { getBooks } from "./data/getBooks";
import Header from "./containers/Header/Header";
import SearchResults from "./containers/SearchResults/SearchResults";

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

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      {!loading && books && <SearchResults books={books} />}
    </>
  );
}

export default App;
