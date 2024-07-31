import { DetectiveCardProps } from "./types";
import styles from "./detective-card.module.css";
import { Flex, Typography } from "@shared/ui";
import clip from "../../../../../../../public/assets/images/clip.png";

export const DetectiveCard = ({ index, rank, points, description, image }: DetectiveCardProps) => {
  return (
    <div className={styles.container}>
      <div>
        <Flex className={styles.top} vertical={false} justify="center" align="center">
          <Typography className={styles.number} variant="m500" color="black">
            Дело No.{index > 9 ? `000${index}` : `0000${index}`}
          </Typography>
          <Typography className={styles.rank} variant="m500" color="black" wrap>
            {rank}
          </Typography>
        </Flex>
        <Flex>
          <Flex className={styles.points} justify="left" vertical={false}>
            <Typography className={styles["points-label"]} variant="m500" color="black">
              Баллы:
            </Typography>
            <Typography className={styles["points-count"]} variant="m400" color="black">
              {points ? points : "Засекречено"}
            </Typography>
          </Flex>
          <Flex className={styles.description}>
            <Typography className={styles["description-label"]} variant="m500" fontSize={16} color="black">
              Описание:
            </Typography>
            <Typography className={styles["description-text"]} variant="m400" color="black" wrap>
              {description ? description : "Засекречено"}
            </Typography>
          </Flex>
        </Flex>
      </div>
      <div className={styles["image"]}>
        <div className={styles["image-wrapper"]}>
          <img className={styles["image-clip"]} src={clip} alt="скрепка" />
          <img className={styles["image-rank"]} src={image} alt={rank} />
        </div>
      </div>
    </div>
  );
};
