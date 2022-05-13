import React from "react";
import { useMovies } from "../../hooks/api";
import { MoviesBlock } from "./MoviesBlock";

type Props = {
  date: Date;
};

export const MoviesPage = ({ date }: Props) => {
  const { result, loading } = useMovies(date);

  return (
    <div className="bg-white min-h-screen">
      {result && <MoviesBlock movies={result} date={date} />}
    </div>
  );
};
