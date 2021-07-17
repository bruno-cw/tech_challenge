import React from "react";
import SongHeaderCell from "../SongHeaderCell/SongHeaderCell";
import Style from "./SongHeader.module.css"

export interface ISongHeaderProps {
  changeSort(sort: string, direction: "asc" | "desc"): void

}


const SongHeader: React.FC<ISongHeaderProps> = ({ changeSort }) => {

  const [field, setField] = React.useState<string>("song")
  const [direction, setDirection] = React.useState<"asc" | "desc">("asc")

  const setSort = (field: string, direction: "asc" | "desc") => {
    setField(field);
    setDirection(direction);
  }

  React.useEffect(() => {
    changeSort(field, direction)
  }, [field, direction, changeSort])

  return (
    <div className={Style.header}>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"song"}>Song Name</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"artist"}>Artist</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"playCount"}>Play Count</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"songReleaseDate"}>Song Release Date</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricA"}>Metric A</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricB"}>Metric B</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricC"}>Metric C</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricD"}>Metric D</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricE"}>Metric E</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricF"}>Metric F</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricG"}>Metric G</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricH"}>Metric H</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricI"}>Metric I</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricJ"}>Metric J</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricK"}>Metric K</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricL"}>Metric L</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricM"}>Metric M</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricN"}>Metric N</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricO"}>Metric O</SongHeaderCell>
      <SongHeaderCell click={(field, direction) => setSort(field, direction)} currentField={field} value={"metricP"}>Metric P</SongHeaderCell>
    </div>
  );
}

export default SongHeader;