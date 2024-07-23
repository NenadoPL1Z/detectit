import { Typography } from "@shared/ui";
import styles from "./rating.module.css";
export const Rating = () => {
  return (
    <section>
      <Typography className={styles.title} variant="b700" fontSize={64} centered>
        СИСТЕМА РЕЙТИНГА
      </Typography>
    </section>
  );
};
