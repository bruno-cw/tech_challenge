import React from "react";
import Song from "../../Models/Song";
import { ISongService } from "../../Services/SongService";
import SongHeader from "./SongHeader/SongHeader";
import SongRow from "./SongRow/SongRow";
import Style from "./SongList.module.css"
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";

export interface ISongListProps {
  songService: ISongService;
}


const SongList: React.FC<ISongListProps> = ({ songService }) => {

  const [songs, setSongs] = React.useState<Song[]>([]);
  const [sort, setSort] = React.useState<string>("song");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [direction, setDirection] = React.useState<"asc" | "desc">("asc");

  React.useEffect(() => {
    setLoading(true);
    setSongs([]);
    songService.getSongs(sort, direction).then((songData: Song[]) => {
      setSongs(songData);
      setLoading(false);
      setErrorMessage("");
    }).catch((error) => {
      console.log(error);
      setLoading(false);
      setErrorMessage("Error loading data!")
    })
  }, [songService, direction, sort, setLoading])

  const changeSort = (sort: string, direction: "asc" | "desc") => {
    setSort(sort);
    setDirection(direction);
  }
  return (
    <div className={Style.table}>
          <SongHeader changeSort={changeSort} />
      {!loading && !errorMessage &&
          <div className={Style.overflow}>
            {songs.map((song, index) => <SongRow key={index} song={song} />)}
          </div>
      }

      { loading &&
        <LoadingIndicator />
      }
      { errorMessage &&
        <h1 className={Style.error}>{errorMessage}</h1>
      }
    </div>
  );
}

export default SongList