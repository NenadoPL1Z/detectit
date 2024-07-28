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
      <th className={cn(styles.body, styles.team, { "align-left": true })}>
        {number + 1}.&nbsp;&nbsp;&nbsp;
        {team}
      </th>
      <th className={cn(styles.body, styles["total-points"])}>{total_points}</th>
      <th className={cn(styles.body, styles["rank"])}>{rank}</th>
      <th className={cn(styles.body, styles["total-games"])}>{total_games}</th>
      <th className={cn(styles.body, styles["empty"])}> </th>
      <th className={cn(styles.body, styles["first-places"])}>{first_places}</th>
      <th className={cn(styles.body, styles["second-places"])}>{second_places}</th>
      <th className={cn(styles.body, styles["third-places"], { "border-off": true })}>{third_places}</th>
    </tr>
  );
};
