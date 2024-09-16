import styles from "./swiper-mobile.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfoArr } from "@shared/mock/detectives-info";
import { DetectiveCard } from "../detective-card";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const SwiperMobile = () => {
  return (
    <>
      <Swiper
        cssMode
        spaceBetween={30}
        slidesPerView="auto">
        {detectivesInfoArr.map((detective, index) => (
          <SwiperSlide
            className={cn(styles.slide, { last: index + 1 === detectivesInfoArr.length })}
            key={detective.id}>
            <DetectiveCard index={index + 1} {...detective} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
