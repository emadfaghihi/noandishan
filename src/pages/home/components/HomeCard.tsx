import { FC, useCallback, useEffect, useState } from "react";
import { Movie, useGetMoviesQuery } from "../../../store/api/HomeApi";
import { StarIcon } from "@heroicons/react/24/solid";

interface HomeCardProps {
  movie: Movie;
}

const HomeCard: FC<HomeCardProps> = ({ movie }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-80 flex items-end flex-col bg-white">
      <img
        className="w-full h-3/5 rounded w-11/12 mt-2 mx-auto"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="px-6 py-4  flex items-end flex-col w-full">
        <div className="flex justify-between w-full	">
          <div className="star flex	">
            <StarIcon className="h-4 w-6 text-slate-700 " />
            <span className="font-normal text-gray-200 text-sm mb-2">
              {movie.imdb_rating}
            </span>
          </div>
          <span className="font-bold text-xl mb-2">{movie.title}</span>
        </div>
        <span className="font-normal text-gray-200 text-sm mb-2">
          {movie.genres}
        </span>
        <span className="font-normal text-gray-200 text-sm mb-2">
          {movie.year}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default HomeCard;
