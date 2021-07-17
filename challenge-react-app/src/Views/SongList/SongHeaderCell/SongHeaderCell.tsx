import React from "react";
import Style from "./SongHeaderCell.module.css"

export interface ISongHeaderCellProps {
  click(field: string, direction: "asc" | "desc"): void
  value: string,
  currentField: string
}


const SongHeaderCell: React.FC<ISongHeaderCellProps> = ({ click, value, currentField, children }) => {
  const [direction, setDirection] = React.useState<"asc" | "desc" | "" >("")
  
  React.useEffect(()=>{
    if (value !== currentField){
      setDirection("");
      return;
    }
    setDirection("asc")
  },[currentField, value])

  const changeDirection = () => {
    if (direction === "asc") {
      setDirection("desc");
      return "desc"
    }
    setDirection("asc");
    return "asc"
  }

  const getDirectionArrow = () => {
    switch(direction){
      case "asc":
        return "^"
      case "desc":
        return "v"
      default:
        return "";
    }
  }

  return (
    <>
      <div className={Style.headerCell} onClick={() => click(value, changeDirection())}>{children} {getDirectionArrow()} </div>
    </>
  );
}

export default SongHeaderCell;