import styles from "./swiper-mobile.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfo } from "@shared/mock/detectives-info";
import { DetectiveCard } from "../detective-card";
import { Flex, Typography } from "@shared/ui";
import { motion } from "framer-motion";
import { useState } from "react";

export const SwiperMobile = () => {
  const [prevViews, setPrevViews] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const width = activeIndex * (100 / (detectivesInfo.length - prevViews));
  const widthStyle = width > 90 ? 100 : width;

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        resizeObserver
        onSlideChange={(swiper) => {
          const transform = swiper?.wrapperEl.style.transform;
          const xTranslate = parseInt(transform.replace(/translate3d\((-?\d+)px, 0px, 0px\)/, "$1"), 10);
          setPrevViews(swiper.width / 250);
          setActiveIndex(Math.abs(xTranslate / 250));
        }}>
        {detectivesInfo.map((detective, index) => (
          <SwiperSlide className={styles.slide} key={detective.id}>
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
          {detectivesInfo.length}
        </Typography>
      </Flex>
    </>
  );
};
