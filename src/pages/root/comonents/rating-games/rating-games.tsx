import { Flex } from "@shared/ui";
import { Input, Button } from "@shared/ui";
import styles from "./raiting-games.module.css";
import { GamesTable } from "./games-table";
import { useRatingGames } from "./use-rating-games";

export const RatingGames = () => {
  const { localSearch, loading, error, gamesDisplayed, isPagination, setLocalSearch, handleLoadMore, handleSubmit } =
    useRatingGames();

  return (
    <Flex tag="section" className={styles.container} vertical>
      <Flex className={styles.search} vertical={false} align="center" gap={8}>
        <Input
          className={styles.input}
          placeholder="Название команды"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <Button className={styles.button} onClick={handleSubmit}>
          ПОСМОТРЕТЬ СТАТИСТИКУ
        </Button>
      </Flex>
      <GamesTable
        games={gamesDisplayed}
        loading={loading}
        error={error}
        isPagination={isPagination}
        onLoadMore={handleLoadMore}
      />
    </Flex>
  );
};
