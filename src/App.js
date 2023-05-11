import React, { useEffect, useState } from "react";
import { TVShowapi } from "./api/tv_show";
import { TVShowDetails } from "./components/TVShowDetail/TVShowDetails";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo1.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopulars = async () => {
    try {
      const popularTVShowList = await TVShowapi.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("Something went wrong when fetching the popular TV shows");
      throw new Error(error);
    }
  };

  const fetchRecommendations = async (tvShowId) => {
    try {
      const recommendedTVShowList = await TVShowapi.fetchRecommendations(
        tvShowId
      );
      if (recommendedTVShowList.length > 0) {
        setRecommendationList(recommendedTVShowList.slice(0, 10));
      }
    } catch (error) {
      alert(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  const fetchByTitle = async (title) => {
    try {
      const searchResponse = await TVShowapi.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert(error);
      throw new Error(error);
    }
  };

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
              title="NetStar"
              subtitle="Find a show you may like!"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
