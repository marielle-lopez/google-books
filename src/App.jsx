import "./App.scss";
import { useState } from "react";

import Header from "./containers/Header/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
    </>
  );
}

export default App;
