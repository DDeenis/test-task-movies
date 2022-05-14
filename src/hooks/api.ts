import { useEffect, useState } from "react";

const apiLink = "https://api.tvmaze.com/schedule";

export const useFetch = <T = any>(url: string) => {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | Error>();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setResult(res))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, []);

  return {
    result,
    loading,
    error,
  };
};

export interface Movie {
  id: string;
  season: number;
  number: number;
  show: {
    name: string;
    premiered: string;
    ended: string;
    image?: {
      medium: string;
      original: string;
    };
  };
}

export const useMovies = (date: Date) => {
  const url = new URL(apiLink);
  url.searchParams.set("country", "US");
  url.searchParams.set("date", date.toISOString().split("T")[0]);

  const response = useFetch<Movie[]>(url.toString());
  return response;
};
