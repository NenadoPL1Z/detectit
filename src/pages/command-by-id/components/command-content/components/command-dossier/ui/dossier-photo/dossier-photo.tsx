import styles from "./dossier-photo.module.css";
import ClipBig from "../../../../../../../../../public/assets/images/clip-big.png";
import { getImgByPoints } from "./helpers";
import { DossierPhotoProps } from "./types";

export const DossierPhoto = ({ rank }: DossierPhotoProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.clip} src={ClipBig} alt="скрепка" />
      <div className={styles["rank-wrapper"]}>
        <img className={styles["rank-image"]} src={getImgByPoints(rank)} alt="ранг" />
      </div>
    </div>
  );
};
