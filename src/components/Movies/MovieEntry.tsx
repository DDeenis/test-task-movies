import React from "react";
import { Movie } from "../../hooks/api";

type Props = {
  movie: Movie;
};

export const MovieEntry = ({ movie }: Props) => {
  return (
    <div className="flex gap-4">
      <img
        src={movie.show.image.medium}
        alt={movie.show.name}
        className="h-32 w-24 shadow-md"
      />
      <div className="flex flex-col justify-between">
        <div className="text-left">
          <p className="font-medium">{movie.show.name}</p>
          <span className="font-medium text-gray-400 text-sm">
            {new Date(movie.show.premiered).getFullYear()}
          </span>
        </div>
        <div className="bg-gray-200 rounded-md p-2 w-max">
          <span className="text-gray-400 text-sm">
            Сезон: {movie.season} Эпизод: {movie.number}
          </span>
        </div>
      </div>
    </div>
  );
};
