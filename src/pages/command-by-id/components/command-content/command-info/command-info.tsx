import styles from "./command-info.module.css";
import { CommandInfoProps } from "./types";
import { Typography } from "@shared/ui";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const CommandInfo = ({ title, value, underline }: CommandInfoProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="m700" color="black" className={cn(styles.title, { underline })}>
        {title}
      </Typography>
      <Typography variant="m400" color="black" className={styles.value}>
        {value}
      </Typography>
    </div>
  );
};
