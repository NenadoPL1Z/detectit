import { DetectiveCardProps } from "./types";
import styles from "./detective-card.module.css";
import { Flex, Typography } from "@shared/ui";

export const DetectiveCard = ({ index, rank, points, description, image }: DetectiveCardProps) => {
  return (
    <div className={styles.container}>
      <Flex className={styles.top} vertical={false} justify="center" align="center" gap={8}>
        <Typography className={styles.number} variant="m500" fontSize={8} lineHeight={35} color="black">
          Дело No.{index > 9 ? `000${index}` : `0000${index}`}
        </Typography>
        <Typography className={styles.rank} variant="m500" fontSize={24} color="black">
          {rank}
        </Typography>
      </Flex>
      <Flex>
        <Flex className={styles.points} justify="left" vertical={false} gap={8}>
          <Typography className={styles["points-label"]} variant="m500" fontSize={16} color="black">
            Баллы:
          </Typography>
          <Typography className={styles["points-count"]} variant="m400" fontSize={14} color="black">
            &nbsp;&nbsp;{points ? points : "Засекречено"}&nbsp;&nbsp;
          </Typography>
        </Flex>
        <Flex className={styles.description} gap={12}>
          <Typography className={styles["description-label"]} variant="m500" fontSize={16} color="black">
            ОПИСАНИЕ:
          </Typography>
          <Typography className={styles["description-text"]} variant="m400" fontSize={14} color="black" wrap>
            {description ? description : "Засекречено"}
          </Typography>
        </Flex>
      </Flex>
      <div className={styles["image"]}>
        <div className={styles["image-wrapper"]}>
          <img className={styles["image-clip"]} src="/public/assets/images/clip.png" alt="скрепка" />
          <img className={styles["image-rank"]} src={image} alt={rank} />
        </div>
      </div>
    </div>
  );
};
