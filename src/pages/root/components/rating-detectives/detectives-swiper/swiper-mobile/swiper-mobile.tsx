import styles from "./swiper-mobile.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { detectivesInfo } from "@shared/mock/detectives-info";
import { DetectiveCard } from "../detective-card";
import { Flex, Typography } from "@shared/ui";

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
      <Flex className={styles.pagination} align="center" gap={12} vertical={false} justify="space-between">
        <Typography variant="m700" fontSize={24} lineHeight={24}>
          1
        </Typography>
        <Typography variant="m700" fontSize={24} lineHeight={24}>
          {detectivesInfo.length}
        </Typography>
      </Flex>
    </>
  );
};
