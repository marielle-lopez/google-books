import "./App.scss";
import { useState, useEffect } from "react";

import { getBooks } from "./data/getBooks";
import Header from "./containers/Header/Header";
import SearchResults from "./containers/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(null);
  const [resultsCount, setResultsCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }

    setLoading(true);

    const wrapper = async () => {
      const response = await getBooks(searchTerm);

      console.log(response.data);
      console.log(response.resultsCount);

      setBooks(response.data);
      setResultsCount(response.resultsCount);
      setPageCount(response.pageCount);
    };

    wrapper();

    setLoading(false);
  }, [searchTerm]);

  return (
    <>
      {/* <img src="https://media1.giphy.com/media/hvFJZUgugYdrkM1XbQ/giphy.gif?cid=ecf05e47n8wkckl4ntxb5o3cpo7funzsosaf6bn4n47enba7&ep=v1_stickers_search&rid=giphy.gif&ct=s" /> */}
      <Header setSearchTerm={setSearchTerm} />

      {!loading && resultsCount && books && (
        <>
          <SearchResults
            books={books}
            resultsCount={resultsCount}
            searchTerm={searchTerm}
          />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
