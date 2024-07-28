import { GamesTableProps } from "./types";
import styles from "./games-table.module.css";
import { TableHeader } from "./components/table-header";
import { TableBody } from "./components/table-body";

export const GamesTable = ({ games }: GamesTableProps) => {
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
    </section>
  );
};
