import axios from "axios";

export interface MovieApi {
  data: Movie[];
  metadata: Metadata;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  genres: string[];
  images: string[];
}

export interface Metadata {
  current_page: string;
  per_page: number;
  page_count: number;
  total_count: number;
}

const HomeApi =()=> axios.get<MovieApi>("https://moviesapi.ir/api/v1/movies");
export default HomeApi;
