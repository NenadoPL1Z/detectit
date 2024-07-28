import { Flex, Typography } from "@shared/ui";
import styles from "./rating-detectives.module.css";
import { DetectiveCard } from "./detective-card";
import { detectivesInfo } from "@shared/mock/detectives-info";
export const RatingDetectives = () => {
  return (
    <section className={styles.container}>
      <Typography className={styles.title} variant="b700" fontSize={64} centered>
        СИСТЕМА РЕЙТИНГА
      </Typography>
      <Flex vertical={false} gap={12} className={styles.detectives}>
        {detectivesInfo.map((detective, index) => (
          <DetectiveCard key={detective.id} index={index + 1} {...detective} />
        ))}
      </Flex>
    </section>
  );
};
