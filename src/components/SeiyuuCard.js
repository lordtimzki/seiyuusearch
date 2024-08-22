import React from "react";

function SeiyuuCard({ seiyuu }) {
  const japanese =
    seiyuu.family_name && seiyuu.given_name
      ? `${seiyuu.family_name}${seiyuu.given_name}`
      : null;
  return (
    <article className="seiyuu-card">
      <a href={seiyuu.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={seiyuu.images.jpg.image_url} alt="seiyuu image"></img>
        </figure>
        <h3>{seiyuu.name}</h3>
        {japanese && <p>{japanese}</p>}
      </a>
    </article>
  );
}

export default SeiyuuCard;
