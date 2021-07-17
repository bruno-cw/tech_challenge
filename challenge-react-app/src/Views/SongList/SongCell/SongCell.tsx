import React from "react";
import Style from './SongCell.module.css';
const SongCell: React.FC = ({children}) => {
  return (
    <>
      <div className={Style.songCell}>{children}</div>
    </>
  );
}

export default SongCell;