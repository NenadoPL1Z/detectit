import { DetectiveCardProps } from "./types";
import styles from "./detective-card.module.css";
import { Flex, Typography } from "@shared/ui";

export const DetectiveCard = ({ rank, index }: DetectiveCardProps) => {
  return (
    <div className={styles.container}>
      <Flex className={styles.top} vertical={false} align="center" gap={8}>
        <Typography variant="m500" fontSize={8} color="black">
          Дело No.{index > 9 ? `000${index}` : `0000${index}`}
        </Typography>
        <Typography variant="m500" fontSize={24} color="black">
          {rank}
        </Typography>
      </Flex>
    </div>
  );
};
