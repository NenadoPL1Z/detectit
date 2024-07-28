import { FormEventHandler, useEffect, useState } from "react";
import { GameModel } from "@shared/types";
import { apiGetAllRatings } from "@entities/api";
import { isAxiosError } from "axios";
import { RATING_GAMES_ERROR_MESSAGE, RATING_GAMES_LIMIT } from "./constants";
import { filterSearch } from "./helpers";

export const useRatingGames = () => {
  const [search, setSearch] = useState("");
  const [localSearch, setLocalSearch] = useState("");
  const [games, setGames] = useState<GameModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  const countDisplayElement = (page + 1) * RATING_GAMES_LIMIT;
  const gamesDisplayed = games.filter(filterSearch(search));
  const isPagination = games.length === countDisplayElement;

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSearch(localSearch);
    setPage(0);
  };

  const getGames = async () => {
    setLoading(true);
    setError("");
    await apiGetAllRatings()
      .then((response) => {
        setGames(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          setError(error.response?.data ?? RATING_GAMES_ERROR_MESSAGE);
        } else {
          setError(RATING_GAMES_ERROR_MESSAGE);
        }
        setLoading(false);
      });
  };

  const handleRetry = () => {
    getGames();
  };

  useEffect(() => {
    getGames();
  }, []);

  return {
    localSearch,
    loading,
    error,
    gamesDisplayed,
    isPagination,
    handleSubmit,
    handleLoadMore,
    handleRetry,
    setLocalSearch,
  };
};
