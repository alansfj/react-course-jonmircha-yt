import React from "react";

export default function SongArtist({ artist }) {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGener} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blanck" rel="noreferrer">
        sitio web
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
}