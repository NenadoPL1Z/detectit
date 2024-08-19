import styles from "./table-header.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const TableHeader = () => {
  return (
    <tr>
      <th className={cn(styles.header, { "align-left": true })}>№ Название команды</th>
      <th className={cn(styles.header, styles["total-points"])}>Всего баллов</th>
      <th className={cn(styles.header, styles.rank)}>Звание</th>
      <th className={cn(styles.header, styles["total-games"])}>Всего игр</th>
      <th className={cn(styles.header, styles.empty)}>&nbsp;&nbsp;</th>
      <th className={cn(styles.header, styles["first-places"])}>Золото</th>
      <th className={cn(styles.header, styles["second-places"])}>Серебро</th>
      <th className={cn(styles.header, styles["third-places"])}>Бронза</th>
    </tr>
  );
};
