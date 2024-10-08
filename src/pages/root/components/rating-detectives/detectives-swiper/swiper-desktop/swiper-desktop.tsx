import SwiperPrevButton from "@shared/assets/icons/swiper-prev-button.svg?react";
import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfoArr } from "@shared/mock/detectives-info";
import { DetectiveCard } from "../detective-card";
import SwiperNextButton from "@shared/assets/icons/swiper-next-button.svg?react";
import { useState } from "react";
import SW from "swiper";
import classnames from "classnames/bind";
import styles from "./swiper-desktop.module.css";

const cn = classnames.bind(styles);

export const SwiperDesktop = () => {
  const [swiper, setSwiper] = useState<SW>();

  const handlePressArrow = (slide: "prev" | "next") => {
    return () => {
      if (slide === "prev") {
        swiper?.slidePrev();
      } else {
        swiper?.slideNext();
      }
    };
  };

  return (
    <>
      <button className={cn(styles.button, styles["button-prev"])} onClick={handlePressArrow("prev")}>
        <SwiperPrevButton />
      </button>
      <Swiper spaceBetween={110} allowTouchMove={false} slidesPerView="auto" onSwiper={setSwiper}>
        {detectivesInfoArr.map((detective, index) => (
          <SwiperSlide className={styles.slide} key={detective.id}>
            <DetectiveCard index={index + 1} {...detective} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={cn(styles.button, styles["button-next"])} onClick={handlePressArrow("next")}>
        <SwiperNextButton />
      </button>
    </>
  );
};
