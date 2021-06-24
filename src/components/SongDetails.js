import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

export default function SongDetails({ search, lyric, bio }) {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.name === "AbortError" || lyric.err ? (
        <Message msg={`Error: no existe la canción ${search.song}`} />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message msg={`Error: no existe el artista ${search.artist}`} />
      )}
    </>
  );
}
