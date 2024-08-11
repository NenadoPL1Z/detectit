import styles from "./command-photo.module.css";
import Clip from "../../../../../public/assets/images/clip-big.png";
import { getImgByPoints } from "./helpers";
import { GameModel } from "@shared/types";

export const CommandPhoto = ({ rank }: Pick<GameModel, "rank">) => {
  return (
    <div className={styles.container}>
      <img className={styles.clip} src={Clip} alt="скрепка" />
      <div className={styles["rank-wrapper"]}>
        <img className={styles["rank-image"]} src={getImgByPoints(rank)} alt="ранг" />
      </div>
    </div>
  );
};
