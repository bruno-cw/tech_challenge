import React from "react";
import Song from "../../Models/Song";
import { ISongService } from "../../Services/SongService";
import SongHeader from "./SongHeader/SongHeader";
import SongRow from "./SongRow/SongRow";
import Style from "./SongList.module.css"

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
    <div className={Style.table}>
      <SongHeader changeSort={changeSort} />
      <div className={Style.overflow}>
        {songs.map((song, index) => <SongRow key={index} song={song} />)}
      </div>
    </div>
  );
}

export default SongList