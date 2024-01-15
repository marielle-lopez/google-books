import { useRef } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const inputVal = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputVal.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputVal}
        placeholder="What book are you looking for?"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
