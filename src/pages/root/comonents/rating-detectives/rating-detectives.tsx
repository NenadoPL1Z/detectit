import { Typography } from "@shared/ui";
import styles from "./rating-detectives.module.css";
import { DetectiveCard } from "./detective-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { detectivesInfo } from "@shared/mock/detectives-info";
import { Navigation } from "swiper/modules";

export const RatingDetectives = () => {
  return (
    <section className={styles.container}>
      <Typography className={styles.title} variant="b700" fontSize={64} centered>
        СИСТЕМА РЕЙТИНГА
      </Typography>
      <Swiper modules={[Navigation]} spaceBetween={110} loop slidesPerView="auto" navigation>
        {detectivesInfo.map((detective, index) => (
          <SwiperSlide className={styles.slide} key={detective.id}>
            <DetectiveCard index={index + 1} {...detective} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
