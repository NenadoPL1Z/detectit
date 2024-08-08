import styles from "./swiper-mobile.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfoArr } from "@shared/mock/detectives-info";
import { DetectiveCard } from "../detective-card";
import { Flex, Typography } from "@shared/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const SwiperMobile = () => {
  const [prevViews, setPrevViews] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const width = activeIndex * (100 / (detectivesInfoArr.length - prevViews));
  const widthStyle = width > 90 ? 100 : width;

  return (
    <>
      <Swiper
        cssMode
        spaceBetween={30}
        slidesPerView="auto"
        onSlideChange={(swiper) => {
          setPrevViews(swiper.width / 250);
          setActiveIndex(swiper.activeIndex);
        }}>
        {detectivesInfoArr.map((detective, index) => (
          <SwiperSlide
            className={cn(styles.slide, { last: index + 1 === detectivesInfoArr.length })}
            key={detective.id}>
            <DetectiveCard index={index + 1} {...detective} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex className={styles.pagination} align="center" gap={12} vertical={false} justify="space-between">
        <Typography variant="m700" fontSize={24} lineHeight={24}>
          1
        </Typography>
        <div className={styles.range}>
          <motion.div animate={{ width: `calc(${widthStyle}% - 10px)` }} className={styles["active-line"]}>
            <div className={styles.dot} />
          </motion.div>
          <div className={styles.line} />
        </div>
        <Typography variant="m700" fontSize={24} lineHeight={24}>
          {detectivesInfoArr.length}
        </Typography>
      </Flex>
    </>
  );
};
