import { FC, useCallback, useEffect, useState } from "react";
import { Movie, useGetMoviesQuery } from "../../../store/api/HomeApi";
import { StarIcon } from "@heroicons/react/24/solid";

interface HomeCardProps {
  movie: Movie;
}

const HomeCard: FC<HomeCardProps> = ({ movie }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-80 flex items-end flex-col bg-white h-auto min-h-3/5 mx-auto w-full ">
      <img
        className=" rounded w-11/12 mt-5 mx-auto h-56"
        src={movie.poster}
        alt={movie.title}
      />
      <div className="px-6 py-4  flex items-end flex-col w-full">
        <div className="flex justify-between w-full items-center">
          <div className="star flex	">
            <span className="font-normal text-gray-200 text-sm mb-2">
              {movie.imdb_rating}
            </span>
            <StarIcon className="h-4 w-6 text-slate-700 " />
          </div>
          <span className="font-bold text-xl mb-2 text-left">
            {movie.title}
          </span>
        </div>
        <span style={{color:"#4d4d4d"}} className="font-normal text-gray-200 text-sm mb-2">
          {movie.genres}
        </span>
        <span style={{color:"#4d4d4d"}} className="font-normal text-gray-200 text-sm mb-2">
          {movie.year}
        </span>
      </div>
    </div>
  );
};

export default HomeCard;
