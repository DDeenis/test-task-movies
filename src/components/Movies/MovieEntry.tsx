import React from "react";
import { Movie } from "../../hooks/api";
import { ExpandableImage } from "./ExpandableImage";

type Props = {
  movie: Movie;
};

export const MovieEntry = ({ movie }: Props) => {
  return (
    <div className="flex gap-4">
      {movie.show.image && (
        <ExpandableImage
          medium={movie.show.image.medium}
          original={movie.show.image.original}
          alt={movie.show.name}
        />
      )}
      <div className="flex flex-col justify-between">
        <div className="text-left">
          <p className="font-medium">{movie.show.name}</p>
          <span className="font-medium text-gray-400 text-sm">
            {new Date(movie.show.premiered).getFullYear()}{" "}
            {movie.show.ended &&
              `- ${new Date(movie.show.ended).getFullYear()}`}
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
