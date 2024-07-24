import { Typography } from "@shared/ui";
import styles from "./rating-swiper.module.css";
export const RatingSwiper = () => {
  return (
    <section>
      <Typography className={styles.title} variant="b700" fontSize={64} centered>
        СИСТЕМА РЕЙТИНГА
      </Typography>
    </section>
  );
};
