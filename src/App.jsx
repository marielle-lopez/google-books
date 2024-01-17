import "./App.scss";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";

import { getBooks } from "./data/getBooks";
import Header from "./containers/Header/Header";
import SearchResults from "./containers/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import FlexWrapper from "./containers/FlexWrapper/FlexWrapper";
import ErrorResults from "./containers/ErrorResults/ErrorResults";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(null);
  const [resultsCount, setResultsCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(null);
  const [error, setError] = useState(null);

  const handlePageChange = (e) => {
    const pageNumber = parseInt(e.target.innerText);
    const startIndex = (pageNumber - 1) * 10;
    const maxResults = 10;

    setLoading(true);

    const wrapper = async () => {
      setBooks(null);
      let response;

      try {
        response = await getBooks(searchTerm, startIndex, maxResults);
        setBooks(response.data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    wrapper();
  };

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }

    setBooks(null);
    setLoading(true);

    const wrapper = async () => {
      const response = await getBooks(searchTerm, 0, 10);

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

      {!loading && error && (
        <FlexWrapper>
          <ErrorResults message={error} />
        </FlexWrapper>
      )}

      {!loading && resultsCount && books && (
        <div>
          <SearchResults
            books={books}
            resultsCount={resultsCount}
            searchTerm={searchTerm}
          />
          <Pagination count={pageCount} onChange={(e) => handlePageChange(e)} />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
