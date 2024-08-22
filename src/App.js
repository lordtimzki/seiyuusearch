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
    const top10People = data.data.slice(0, 10);
    SetTopSeiyuu(top10People);
    SetSeiyuuList(top10People);
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

      if (data.data && Array.isArray(data.data)) {
        const peopleWithRoles = await Promise.all(
          data.data.map(async (person) => {
            const rolesResponse = await fetch(
              `https://api.jikan.moe/v4/people/${person.mal_id}/voices`
            );
            const rolesData = await rolesResponse.json();
            if (rolesData.data && rolesData.data.length > 0) {
              return person;
            }
            return null;
          })
        );

        const filteredResults = peopleWithRoles.filter(
          (person) => person !== null
        );
        SetSeiyuuList(filteredResults);
      } else {
        SetSeiyuuList([]);
        console.error("Unexpected API response structure:", data);
      }
    } catch (error) {
      SetSeiyuuList([]);
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
