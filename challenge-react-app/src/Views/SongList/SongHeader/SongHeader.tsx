import React from "react";
import SongHeaderCell from "../SongHeaderCell/SongHeaderCell";

export interface ISongHeaderProps {
  changeSort(sort: string,direction: "asc"|"desc") : void

}


const SongHeader: React.FC<ISongHeaderProps> = ({changeSort}) => {

  const [field, setField] = React.useState<string>("")
  const [direction, setDirection] = React.useState<"asc"|"desc">("asc")

  const setSort = (field:string, direction: "asc"|"desc") => {
    setField(field);
    setDirection(direction);
  }

  React.useEffect(()=>{
      changeSort(field, direction)
  },[field, direction, changeSort])

  return (
    <>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"song"}>Song Name</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"artist"}>Artist</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"songReleaseDate"}>Song Release Date</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"playCount"}>Play Count</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricA"}>Metric A</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricB"}>Metric B</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricC"}>Metric C</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricD"}>Metric D</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricE"}>Metric E</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricF"}>Metric F</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricG"}>Metric G</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricH"}>Metric H</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricI"}>Metric I</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricJ"}>Metric J</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricK"}>Metric K</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricL"}>Metric L</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricM"}>Metric M</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricN"}>Metric N</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricO"}>Metric O</SongHeaderCell>
      <SongHeaderCell click={(field,direction) => setSort(field,direction)} value={"metricP"}>Metric P</SongHeaderCell>
    </>
  );
}

export default SongHeader;