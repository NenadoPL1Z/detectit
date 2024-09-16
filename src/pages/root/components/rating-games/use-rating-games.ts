import { FormEventHandler, useEffect, useState } from "react";
import { apiGetAllRatings } from "@entities/api";
import { isAxiosError } from "axios";
import { RATING_GAMES_ERROR_MESSAGE, RATING_GAMES_LIMIT } from "./constants";
import { filterSearch } from "./helpers";
import { useRatingStore } from "@entities/store/rating";
export const useRatingGames = () => {
  const { search, games, loading, error, page, setSearch, incrementPage, resetPage, setStore } = useRatingStore();
  const [localSearch, setLocalSearch] = useState(search);

  const countDisplayElement = page * RATING_GAMES_LIMIT;
  const gamesDisplayed = games.filter(filterSearch(search)).slice(0, page * RATING_GAMES_LIMIT);
  const isPagination = gamesDisplayed.length === countDisplayElement;

  const isDisplayLoading = Boolean(loading && !error && !games.length);
  const isDisplayEmpty = Boolean(!gamesDisplayed.length && !error && !loading);
  const isDisplayError = Boolean(error && !games.length);
  const isDisplayMore = Boolean(games.length && !error && !loading && isPagination);

  const handleLoadMore = () => {
    incrementPage();
  };

  const handleStoreSearch = (search: string) => {
    setSearch(search);
    setLocalSearch(search);
    resetPage();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (search === localSearch) return;
    handleStoreSearch(localSearch);
  };

  const getGames = async () => {
    setStore({
      loading: true,
      error: "",
    });
    await apiGetAllRatings()
      .then((response) => {
        setStore({
          games: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        let result = RATING_GAMES_ERROR_MESSAGE;
        if (isAxiosError(error) && error.response?.data) result = error.response.data;
        setStore({
          error: result,
          loading: false,
        });
      });
  };

  const handleRetry = () => {
    getGames();
  };

  const handleClear = () => {
    setSearch("");
    setLocalSearch("");
  };

  useEffect(() => {
    if (!games.length) getGames();
  }, []);

  return {
    games,
    isDisplayLoading,
    isDisplayEmpty,
    isDisplayError,
    isDisplayMore,
    gamesDisplayed,
    localSearch,
    setLocalSearch,
    handleSubmit,
    handleLoadMore,
    handleRetry,
    handleClear,
    handleStoreSearch,
  };
};
