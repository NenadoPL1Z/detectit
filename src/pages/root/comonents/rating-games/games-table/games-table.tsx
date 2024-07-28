import { GamesTableProps } from "./types";
import styles from "./games-table.module.css";
import { TableHeader } from "./components/table-header";
import { TableBody } from "./components/table-body";
import { TableFooter } from "./components/table-footer";

export const GamesTable = (props: GamesTableProps) => {
  const { games } = props;
  return (
    <section className={styles.container}>
      <table className={styles.table} cellSpacing="0" cellPadding="0">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {games.map((game, index) => (
            <TableBody key={game.team + game.rank + game.total_points} number={index} {...game} />
          ))}
        </tbody>
      </table>
      <TableFooter {...props} />
    </section>
  );
};
