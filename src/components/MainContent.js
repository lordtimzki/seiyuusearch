import React from "react";
import SeiyuuCard from "./SeiyuuCard";

function MainContent(props) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Search for a seiyuu..."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="seiyuu-list">
        {props.seiyuuList.map((seiyuu) => (
          <SeiyuuCard seiyuu={seiyuu} key={seiyuu.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
