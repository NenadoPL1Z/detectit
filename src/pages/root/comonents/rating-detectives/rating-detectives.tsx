import { Typography } from "@shared/ui";
import styles from "./rating-detectives.module.css";
import { DetectivesSwiper } from "./detectives-swiper";

export const RatingDetectives = () => {
  return (
    <section className={styles.container}>
      <Typography className={styles.title} variant="b700" fontSize={64} centered>
        СИСТЕМА РЕЙТИНГА
      </Typography>
      <DetectivesSwiper />
    </section>
  );
};
