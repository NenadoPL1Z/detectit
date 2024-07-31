import styles from "./table-header.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const TableHeader = () => {
  return (
    <tr>
      <th className={cn(styles.header, { "align-left": true })}>№ Название команды</th>
      <th className={cn(styles.header, styles["total-points"])}>Кол-во баллов</th>
      <th className={cn(styles.header, styles.rank)}>Звание</th>
      <th className={cn(styles.header, styles["total-games"])}>Кол-во игр</th>
      <th className={cn(styles.header, styles.empty)}>&nbsp;&nbsp;</th>
      <th className={cn(styles.header, styles["first-places"])}>Кол-во 1 мест</th>
      <th className={cn(styles.header, styles["second-places"])}>Кол-во 2 мест</th>
      <th className={cn(styles.header, styles["third-places"])}>Кол-во 3 мест</th>
    </tr>
  );
};
