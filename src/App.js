import React from "react";
import { TVShowapi } from "./api/tv_show";
import s from "./style.module.css";

TVShowapi.fetchPopulars();
function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{width:'100%'}} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>TV Show Detail</div>
      <div className={s.recommended_tv_shows}>Recommended TV Shows</div>
    </div>
  );
}

export default App;
