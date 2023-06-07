import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://moviesapi.ir/api/",
  prepareHeaders: (headers) => {
    if (!headers.get("Authorization") && localStorage.getItem("token"))
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);

    headers.set("Accept", "application/json");

    return headers;
  },
});

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

const HomeApi = createApi({
  baseQuery,
  reducerPath: "HomeApi",
  tagTypes: ["moviesList"],
  endpoints: (build) => ({
    getMovies: build.query<MovieApi, { page?: string }>({
      query: (page) => ({
        url: `v1/movies`,
        params: page,
      }),
      providesTags: ["moviesList"],
    }),
  }),
});
export const { useGetMoviesQuery } = HomeApi;
export default HomeApi;
