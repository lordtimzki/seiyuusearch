import React from "react";
import Header from "./Header";

function Sidebar({ topSeiyuu }) {
  return (
    <aside>
      <nav>
        <h3>Top Seiyuu</h3>
        {topSeiyuu.map((seiyuu) => (
          <a
            href={seiyuu.url}
            target="_blank"
            rel="noreferrer"
            key={seiyuu.mal_id}
          >
            {seiyuu.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
