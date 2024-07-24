import { Flex } from "@shared/ui";
import { Input, Button } from "@shared/ui";
import styles from "./raiting-list.module.css";
import { useEffect, useState } from "react";
import { apiGetAllRatings } from "@entities/api";
import { GameModel } from "@shared/types";
import { isAxiosError } from "axios";

const ERROR_MESSAGE = "Ошибка при попытке получения рейтинга команд. Попробуйте позже или обновите страницу";

export const RatingList = () => {
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
        setError(isAxiosError<string>(error) ? (error.response?.data ?? ERROR_MESSAGE) : ERROR_MESSAGE);
        setLoading(false);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Flex tag="section" className={styles.container} vertical>
      <Flex vertical={false} align="center" gap={8}>
        <Input
          className={styles.input}
          placeholder="Название команды"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className={styles.button}>ПОСМОТРЕТЬ СТАТИСТИКУ</Button>
      </Flex>
    </Flex>
  );
};
