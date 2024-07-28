import { TableBodyProps } from "./types";
import styles from "./table-body.module.css";
export const TableBody = ({
  team,
  total_points,
  rank,
  total_games,
  first_places,
  second_places,
  third_places,
}: TableBodyProps) => {
  return (
    <tr>
      <th className={styles.body}>{team}</th>
      <th className={styles.body}>{total_points}</th>
      <th className={styles.body}>{rank}</th>
      <th className={styles.body}>{total_games}</th>
      <th className={styles.body}> </th>
      <th className={styles.body}>{first_places}</th>
      <th className={styles.body}>{second_places}</th>
      <th className={styles.body}>{third_places}</th>
    </tr>
  );
};
