import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [seiyuuList, SetSeiyuuList] = useState([]);
  const [topSeiyuu, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topSeiyuu={topSeiyuu} />
      </div>
    </div>
  );
}

export default App;
