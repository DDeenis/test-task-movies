import React from "react";
import { useMovies } from "../../hooks/api";
import { MoviesBlock } from "./MoviesBlock";

type Props = {
  date: Date;
};

export const MoviesPage = ({ date }: Props) => {
  const prevDate = new Date(date);
  prevDate.setDate(prevDate.getDate() - 1);
  const { result, loading } = useMovies(date);
  const { result: resultPrev } = useMovies(prevDate);

  return (
    <div className="bg-white min-h-screen">
      {result && <MoviesBlock movies={result} date={date} />}
      {resultPrev && <MoviesBlock movies={resultPrev} date={prevDate} />}
    </div>
  );
};
