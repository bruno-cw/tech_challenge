import React from "react";
import Song from "../../Models/Song";
import { ISongService } from "../../Services/SongService";
import SongHeader from "./SongHeader/SongHeader";
import SongRow from "./SongRow/SongRow";

export interface ISongListProps {
  songService: ISongService;
}


const SongList: React.FC<ISongListProps> = ({songService}) => {

  const [songs, setSongs] = React.useState<Song[]>([]);
  const [sort, setSort] = React.useState<string>("song");
  const [direction, setDirection] = React.useState<"asc" | "desc">("asc");

  React.useEffect(() => {
    setSongs([]);
    songService.getSongs(sort, direction).then((songData: Song[]) => {
      setSongs(songData);
    })
  }, [songService, direction, sort])

  const changeSort = (sort: string, direction: "asc" | "desc") => {
    setSort(sort);
    setDirection(direction);
  }
  return (
    <div>
      <SongHeader changeSort={changeSort} />
      {songs.map((song, index) => <SongRow key={index} song={song} />)}
    </div>
  );
}

export default SongList