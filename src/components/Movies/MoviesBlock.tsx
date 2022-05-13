import React, { useState } from "react";
import { Movie } from "../../hooks/api";
import { MovieEntry } from "./MovieEntry";
import ChevronUp from "mdi-react/ChevronUpIcon";
import ChevronDown from "mdi-react/ChevronDownIcon";
import "./styles.css";

type Props = {
  date: Date;
  movies: Movie[];
};

export const MoviesBlock = ({ movies, date }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const slicesMovies = movies.slice(0, isExpanded ? undefined : 2);

  const onExpand = () => setIsExpanded(true);
  const onCollapse = () => setIsExpanded(false);

  return (
    <section className="pb-4">
      <div className="py-3 text-center">
        <span className="font-medium">{date.toDateString()}</span>
      </div>
      <hr />
      <div className="flex flex-col gap-6 mt-4 px-6">
        {slicesMovies.map((m) => (
          <MovieEntry movie={m} />
        ))}
        {movies.length > 2 && (
          <button
            className="border border-gray-300 w-full p-2 rounded-md text-sm text-gray-400"
            onClick={isExpanded ? onCollapse : onExpand}
          >
            {isExpanded
              ? "Показать основные"
              : `Еще ${movies.length - 2} сериалов`}
            <span className="movie-block-btn-chevron">
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
        )}
      </div>
    </section>
  );
};
