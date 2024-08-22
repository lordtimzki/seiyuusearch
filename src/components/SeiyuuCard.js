import React from "react";

function SeiyuuCard({ seiyuu }) {
  return (
    <article className="seiyuu-card">
      <a href={seiyuu.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={seiyuu.images.jpg.image_url} alt="seiyuu image"></img>
        </figure>
        <h3>{seiyuu.name}</h3>
      </a>
    </article>
  );
}

export default SeiyuuCard;
