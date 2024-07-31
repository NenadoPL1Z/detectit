import { SwiperDesktop } from "./swiper-desktop";
import styles from "./detectives-swiper.module.css";
import "swiper/css";
import { SwiperMobile } from "./swiper-mobile";

export const DetectivesSwiper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        <SwiperDesktop />
      </div>
      <div className={styles.mobile}>
        <SwiperMobile />
      </div>
    </div>
  );
};
