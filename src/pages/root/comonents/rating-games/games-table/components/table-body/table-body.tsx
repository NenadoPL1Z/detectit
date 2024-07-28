import { TableBodyProps } from "./types";
import styles from "./table-body.module.css";
import classnames from "classnames/bind";
const cn = classnames.bind(styles);

export const TableBody = ({
  number,
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
      <th className={cn(styles.body, { "align-left": true, border: true })}>
        {number + 1}.&nbsp;&nbsp;&nbsp;
        {team}
      </th>
      <th className={cn(styles.body, { "align-left": false, border: true })}>{total_points}</th>
      <th className={cn(styles.body, { "align-left": false, border: true })}>{rank}</th>
      <th className={cn(styles.body, { "align-left": false, border: true })}>{total_games}</th>
      <th className={cn(styles.body, { "align-left": false, border: true })}> </th>
      <th className={cn(styles.body, { "align-left": false, border: true })}>{first_places}</th>
      <th className={cn(styles.body, { "align-left": false, border: true })}>{second_places}</th>
      <th className={cn(styles.body, { "align-left": false, border: false })}>{third_places}</th>
    </tr>
  );
};
