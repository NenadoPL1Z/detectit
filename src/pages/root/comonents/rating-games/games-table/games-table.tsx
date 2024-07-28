import { GamesTableProps } from "./types";
import styles from "./games-table.module.css";
import { TableHeader } from "./components/table-header";
import { TableBody } from "./components/table-body";
export const GamesTable = ({ games }: GamesTableProps) => {
  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <TableHeader header="Название команды" />
            <TableHeader header="Кол-во баллов" />
            <TableHeader header="Звание" />
            <TableHeader header="Кол-во игр" />
            <TableHeader header=" " />
            <TableHeader header="Кол-во 1 мест" />
            <TableHeader header="Кол-во 2 мест" />
            <TableHeader header="Кол-во 3 мест" />
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <TableBody key={game.team + game.rank + game.total_points} {...game} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
