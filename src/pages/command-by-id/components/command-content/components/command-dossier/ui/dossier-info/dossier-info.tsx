import styles from "./dossier-info.module.css";
import { DossierInfoProps } from "./types";
import { Typography } from "@shared/ui";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const DossierInfo = ({ title, value, underline }: DossierInfoProps) => {
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
