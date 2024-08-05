import { TableBodyProps } from "./types";
import styles from "./table-body.module.css";
import classnames from "classnames/bind";
import { NavigationRoutes } from "@shared/constants";
import { Link } from "react-router-dom";
const cn = classnames.bind(styles);

export const TableBody = (props: TableBodyProps) => {
  const { id, number, team, total_points, rank, total_games, first_places, second_places, third_places } = props;
  return (
    <tr className={cn({ row: number % 10 == 0 && number !== 0 })}>
      <th className={cn(styles.body, styles.team, { "align-left": true })}>
        {number + 1}.&nbsp;&nbsp;&nbsp;
        <Link to={`${NavigationRoutes.COMMANDS.path}/${id}`} state={props}>
          <span>{team}</span>
        </Link>
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
