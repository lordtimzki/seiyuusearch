import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [seiyuuList, SetSeiyuuList] = useState([]);
  const [topSeiyuu, SetTopSeiyuu] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopPeople = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/people`);
    const data = await response.json();
    SetTopSeiyuu(data.data.slice(0, 10));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    FetchPeople(search);
  };

  const FetchPeople = async (query) => {
    const url = new URL("https://api.jikan.moe/v4/people");

    if (query.length === 1) {
      url.searchParams.append("letter", query);
    } else {
      url.searchParams.append("q", query);
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("API Response:", data);
      SetSeiyuuList(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    GetTopPeople();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topSeiyuu={topSeiyuu} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          seiyuuList={seiyuuList}
        />
      </div>
    </div>
  );
}

export default App;
