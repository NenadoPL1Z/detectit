import styles from "./command-info.module.css";
import { CommandInfoProps } from "./types";
import { Typography } from "@shared/ui";
export const CommandInfo = ({ title, value }: CommandInfoProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="m700" color="black" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="m400" color="black" className={styles.value}>
        {value}
      </Typography>
    </div>
  );
};
