import styles from "./swiper-mobile.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfo } from "@shared/mock/detectives-info";
import { DetectiveCard } from "../detective-card";

export const SwiperMobile = () => {
  return (
    <>
      <Swiper spaceBetween={30} slidesPerView="auto">
        {detectivesInfo.map((detective, index) => (
          <SwiperSlide className={styles.slide} key={detective.id}>
            <DetectiveCard index={index + 1} {...detective} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
