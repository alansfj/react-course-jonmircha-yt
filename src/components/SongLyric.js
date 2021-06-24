import React from "react";

export default function SongLyric({ title, lyrics }) {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </section>
  );
}
