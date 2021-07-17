import React from "react";
import Style from './Logo.module.css';
const Logo : React.FC = () => {
  return (
    <>
        <span className={Style.heart}>❤</span>
        <span className={Style.iHeart}>iHeart</span>
        <span className={Style.media}>MEDIA</span>  
    </>
  );
}

export default Logo
