import { TableHeaderProps } from "./types";
import styles from "./table-header.module.css";
export const TableHeader = ({ header, align = "center" }: TableHeaderProps) => {
  return (
    <th className={styles.header} style={{ textAlign: align }}>
      {header}
    </th>
  );
};
