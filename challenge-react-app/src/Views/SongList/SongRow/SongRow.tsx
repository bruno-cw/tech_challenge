import React from "react";
import Song from "../../../Models/Song";
import SongCell from "../SongCell/SongCell";

export interface ISongRowProps {
  song: Song;
}


const SongRow: React.FC<ISongRowProps> = ({song}) => {
  return (
    <>
      <SongCell>{song.song}</SongCell>
      <SongCell>{song.artist}</SongCell>
      <SongCell>{song.playCount}</SongCell>
      <SongCell>{song.songReleaseDate}</SongCell>
      <SongCell>{song.metricA}</SongCell>
      <SongCell>{song.metricB}</SongCell>
      <SongCell>{song.metricC}</SongCell>
      <SongCell>{song.metricD}</SongCell>
      <SongCell>{song.metricE}</SongCell>
      <SongCell>{song.metricF}</SongCell>
      <SongCell>{song.metricG}</SongCell>
      <SongCell>{song.metricH}</SongCell>
      <SongCell>{song.metricI}</SongCell>
      <SongCell>{song.metricJ}</SongCell>
      <SongCell>{song.metricK}</SongCell>
      <SongCell>{song.metricL}</SongCell>
      <SongCell>{song.metricM}</SongCell>
      <SongCell>{song.metricN}</SongCell>
      <SongCell>{song.metricO}</SongCell>
      <SongCell>{song.metricP}</SongCell>
    </>
  );
}

export default SongRow;