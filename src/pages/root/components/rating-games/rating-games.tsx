import { Flex } from "@shared/ui";
import { Input, Button } from "@shared/ui";
import styles from "./raiting-games.module.css";
import { GamesTable } from "./games-table";
import { useRatingGames } from "./use-rating-games";

export const RatingGames = () => {
  const {
    gamesDisplayed,
    localSearch,
    setLocalSearch,
    handleLoadMore,
    handleRetry,
    handleClear,
    handleSubmit,
    ...displays
  } = useRatingGames();

  return (
    <Flex tag="section" className={styles.container} vertical>
      <form onSubmit={handleSubmit}>
        <Flex className={styles.form} vertical={false} align="center" gap={8}>
          <Input
            className={styles.input}
            placeholder="Название команды"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onClear={() => setLocalSearch("")}
          />
          <Button className={styles.button} type="submit">
            ПОСМОТРЕТЬ СТАТИСТИКУ
          </Button>
        </Flex>
      </form>
      <GamesTable
        games={gamesDisplayed}
        onLoadMore={handleLoadMore}
        onRetry={handleRetry}
        onClear={handleClear}
        {...displays}
      />
    </Flex>
  );
};
