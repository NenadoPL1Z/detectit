import { Flex } from "@shared/ui";
import { Input, Button } from "@shared/ui";
import styles from "./raiting-games.module.css";
import { useEffect, useState } from "react";
import { apiGetAllRatings } from "@entities/api";
import { GameModel } from "@shared/types";
import { isAxiosError } from "axios";
import { RATING_GAMES_ERROR_MESSAGE } from "./constants";
import { GamesTable } from "./games-table";

export const RatingGames = () => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState<GameModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Flex tag="section" className={styles.container} vertical>
      <Flex className={styles.search} vertical={false} align="center" gap={8}>
        <Input
          className={styles.input}
          placeholder="Название команды"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className={styles.button}>ПОСМОТРЕТЬ СТАТИСТИКУ</Button>
      </Flex>
      <GamesTable games={games} loading={loading} error={error} />
    </Flex>
  );
};
