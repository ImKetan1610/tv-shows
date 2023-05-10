import axios from "axios";
import { FAKE_DATA, FAKE_RECOMMENDATION } from "./fake_data";
import { DATABASE_URL, API_KEY } from "../config";

export class TVShowapi {
  static async fetchPopulars() {
    const response = await axios.get(`${DATABASE_URL}tv/popular${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
    // return FAKE_DATA;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${DATABASE_URL}tv/${tvShowId}/recommendations${API_KEY}`
    );

    return response.data.results;

    // return FAKE_RECOMMENDATION;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${DATABASE_URL}search/tv${API_KEY}&query=${title}`
    );
      console.log(response.data.results);
    return response.data.results;

    // return FAKE_RECOMMENDATION;
  }
}
