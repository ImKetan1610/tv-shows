import React, { useEffect, useState } from "react";
import { TVShowapi } from "./api/tv_show";
import { TVShowDetails } from "./components/TVShowDetail/TVShowDetails";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import TVShowListItem from "./components/TVShowListItem/TVShowListItem";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  const fetchPopulars = async () => {
    const popularTVShowList = await TVShowapi.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  };

  useEffect(() => {
    fetchPopulars();
  }, []);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a show you may like!"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <>
            <TVShowListItem
              tvshow={currentTVShow}
              onClick={(tvshow) => {
                console.log(tvshow);
              }}
            />
            <TVShowListItem
              tvshow={currentTVShow}
              onClick={(tvshow) => {
                console.log(tvshow);
              }}
            />
            <TVShowListItem
              tvshow={currentTVShow}
              onClick={(tvshow) => {
                console.log(tvshow);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
