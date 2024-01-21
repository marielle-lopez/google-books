import { useState, createContext } from "react";

export const BooksContext = createContext(null);

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState(null);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
