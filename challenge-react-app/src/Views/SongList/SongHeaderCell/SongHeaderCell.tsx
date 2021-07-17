import React from "react";
import Style from "./SongHeaderCell.module.css"

export interface ISongHeaderCellProps {
  click(field: string, direction: "asc" | "desc"): void
  value: string
}


const SongHeaderCell: React.FC<ISongHeaderCellProps> = ({ click, value, children }) => {
  const [direction, setDirection] = React.useState<"asc" | "desc">("asc")
  const getDirection = () => {
    if (direction === "asc") {
      setDirection("desc");
      return "desc"
    }
    setDirection("asc");
    return "asc"
  }
  return (
    <>
      <div className={Style.headerCell} onClick={() => click(value, getDirection())}>{children} {direction === "asc"? "^":"v"}</div>
    </>
  );
}

export default SongHeaderCell;