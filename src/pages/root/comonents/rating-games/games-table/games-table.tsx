import { GamesTableProps } from "./types";
import Spinner from "@shared/assets/icons/spinner.svg?react";
import { Typography } from "@shared/ui";
import styles from "./games-table.module.css";
export const GamesTable = ({ games, loading }: GamesTableProps) => {
  return (
    <section className={styles.container}>
      <Typography variant="m400" fontSize={18}>
        {JSON.stringify(games.map((item) => item.team))}
      </Typography>
      {loading && <Spinner />}
    </section>
  );
};
