import { Typography } from "@shared/ui";
import styles from "./rating-detectives.module.css";
import { DetectiveCard } from "./detective-card";
import { detectivesInfo } from "@shared/mock/detectives-info";
export const RatingDetectives = () => {
  return (
    <section className={styles.container}>
      <Typography className={styles.title} variant="b700" fontSize={64} centered>
        СИСТЕМА РЕЙТИНГА
      </Typography>
      <DetectiveCard index={1} {...detectivesInfo[0]} />
    </section>
  );
};
