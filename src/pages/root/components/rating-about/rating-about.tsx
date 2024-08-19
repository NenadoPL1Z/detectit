import { Typography } from "@shared/ui";
import styles from "./rating-about.module.css";
import { staticInfo } from "@shared/mock/static-info";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const RatingAbout = () => {
  return (
    <section className={styles.about}>
      <Typography className={cn(styles.typography, styles["typography-first"])} variant="m500">
        {staticInfo.about}
      </Typography>
    </section>
  );
};
