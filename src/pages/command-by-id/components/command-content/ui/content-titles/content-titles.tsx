import { ContentTitleProps } from "./types";
import { Typography } from "@shared/ui";
import styles from "./content-titles.module.css";

export const ContentTitles = ({ team }: ContentTitleProps) => {
  return (
    <>
      <Typography variant="b700" className={styles.title}>
        статистика команды
      </Typography>
      <Typography variant="m500" className={styles.subtitle}>
        {team?.toUpperCase() ?? "..."}
      </Typography>
    </>
  );
};
