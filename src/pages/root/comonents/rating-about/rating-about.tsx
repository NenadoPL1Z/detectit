import { Flex, Typography } from "@shared/ui";
import styles from "./rating-about.module.css";
import { staticInfo } from "@shared/mock/static-info";

export const RatingAbout = () => {
  return (
    <Flex tag="section" align="center">
      <div className={styles.about}>
        <Typography className={styles.aboutFirst} variant="m500" fontSize={18} lineHeight={30}>
          {staticInfo.about.firstParagraph}
        </Typography>
        <Typography variant="m500" fontSize={18} lineHeight={30} wrap>
          {staticInfo.about.secondParagraph}
        </Typography>
      </div>
    </Flex>
  );
};
