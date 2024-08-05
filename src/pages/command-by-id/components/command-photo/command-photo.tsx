import styles from "./command-photo.module.css";
import Clip from "../../../../../public/assets/images/clip-big.png";
import { getImgByPoints } from "./helpers";
import { GameModel } from "@shared/types";

export const CommandPhoto = ({ total_points }: Pick<GameModel, "total_points">) => {
  return (
    <div className={styles.container}>
      <img className={styles.clip} src={Clip} alt="скрепка" />
      <div className={styles["rank-wrapper"]}>
        <img className={styles["rank-image"]} src={getImgByPoints(total_points)} alt="ранг" />
      </div>
    </div>
  );
};
