import { TableHeaderProps } from "./types";
import styles from "./table-header.module.css";
export const TableHeader = ({ header }: TableHeaderProps) => {
  return <th className={styles.header}>{header}</th>;
};
