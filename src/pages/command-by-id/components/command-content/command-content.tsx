import styles from "./command-content.module.css";
import { GameModel } from "@shared/types";
export const CommandContent = ({ team }: GameModel) => {
  return <div className={styles.container}>{team}</div>;
};
