import { DetectiveCardProps } from "./types";
import styles from "./detective-card.module.css";

export const DetectiveCard = ({ rank }: DetectiveCardProps) => {
  return <div className={styles.container}>{rank}</div>;
};
