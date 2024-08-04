import styles from "./command-content.module.css";
import Clip from "../../../../../public/assets/images/clip.png";
export const CommandContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img className={styles.clip} src={Clip} alt="скрепка" />
      </div>
    </div>
  );
};
