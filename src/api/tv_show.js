import axios from "axios";

const DATABASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=8708f5ada75331d9fef36704da0716e8";

export class TVShowapi {
  static async fetchPopulars() {
    const response = await axios.get(`${DATABASE_URL}tv/popular${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
