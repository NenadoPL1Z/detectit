import { GamesTableProps } from "./types";
import styles from "./games-table.module.css";
import { TableHeader } from "./components/table-header";
import { TableBody } from "./components/table-body";
import { TableFooter } from "./components/table-footer";
import { getOriginalNumber } from "@pages/root/components/rating-games/games-table/helpers";

export const GamesTable = (props: GamesTableProps) => {
  const { gamesOriginal, gamesDisplay } = props;
  return (
    <section className={styles.container}>
      <table className={styles.table} cellSpacing="0" cellPadding="0">
        <thead className={styles.thead}>
          <TableHeader />
        </thead>
        <tbody>
          {gamesDisplay.map((game) => (
            <TableBody
              key={game.team + game.rank + game.total_points}
              number={getOriginalNumber(game, gamesOriginal)}
              {...game}
            />
          ))}
        </tbody>
      </table>
      <TableFooter {...props} />
    </section>
  );
};
