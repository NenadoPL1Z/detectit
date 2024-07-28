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
      <th className={cn(styles.body, { "align-left": true })}>
        {number + 1}.&nbsp;&nbsp;&nbsp;
        {team}
      </th>
      <th className={cn(styles.body)}>{total_points}</th>
      <th className={cn(styles.body)}>{rank}</th>
      <th className={cn(styles.body)}>{total_games}</th>
      <th className={cn(styles.body)}> </th>
      <th className={cn(styles.body)}>{first_places}</th>
      <th className={cn(styles.body)}>{second_places}</th>
      <th className={cn(styles.body, { "border-off": true })}>{third_places}</th>
    </tr>
  );
};
