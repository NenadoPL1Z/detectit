import styles from "./swiper-mobile.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfo } from "@shared/mock/detectives-info";
import { DetectiveCard } from "../detective-card";
import { Flex, Typography } from "@shared/ui";
import { motion } from "framer-motion";

export const SwiperMobile = () => {
  const activeIndex = 0;

  return (
    <>
      <Swiper spaceBetween={30} slidesPerView="auto">
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
          <motion.div
            animate={{ width: `${activeIndex * (100 / detectivesInfo.length)}%` }}
            className={styles["active-line"]}>
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
