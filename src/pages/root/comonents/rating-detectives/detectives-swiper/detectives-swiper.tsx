import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfo } from "@shared/mock/detectives-info";
import styles from "./detectives-swiper.module.css";
import { DetectiveCard } from "./detective-card";
import { useState } from "react";
import SW from "swiper";
import SwiperNextButton from "@shared/assets/icons/swiper-next-button.svg?react";
import SwiperPrevButton from "@shared/assets/icons/swiper-prev-button.svg?react";
import "swiper/css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const DetectivesSwiper = () => {
  const [swiper, setSwiper] = useState<SW | null>(null);
  const isPrev = true;
  const isNext = true;

  const onSwiper = (swiperInstance: SW) => {
    setSwiper(swiperInstance);
  };

  const handlePressArrow = (slide: "prev" | "next") => {
    return () => {
      if (swiper) {
        if (slide === "prev") {
          swiper.slidePrev();
          return;
        }
        swiper.slideNext();
      }
    };
  };

  return (
    <div className={styles.container}>
      {isPrev && (
        <button className={cn(styles.button, styles["button-prev"])} onClick={handlePressArrow("prev")}>
          <SwiperPrevButton />
        </button>
      )}
      <Swiper spaceBetween={110} loop slidesPerView="auto" navigation onSwiper={onSwiper}>
        {detectivesInfo.map((detective, index) => (
          <SwiperSlide className={styles.slide} key={detective.id}>
            <DetectiveCard index={index + 1} {...detective} />
          </SwiperSlide>
        ))}
      </Swiper>
      {isNext && (
        <button className={cn(styles.button, styles["button-next"])} onClick={handlePressArrow("next")}>
          <SwiperNextButton />
        </button>
      )}
    </div>
  );
};
