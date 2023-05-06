import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config"; 
const MAX_TITLE_CHAR = 20;

const TVShowListItem = ({ tvshow, onClick }) => {
  
  const onClick_ = () => {
    onClick(tvshow);
  };

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvshow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvshow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvshow.name.length > MAX_TITLE_CHAR
          ? tvshow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvshow.name}
      </div>
    </div>
  );
};

export default TVShowListItem;
