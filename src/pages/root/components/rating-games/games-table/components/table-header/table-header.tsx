import styles from "./table-header.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const TableHeader = () => {
  return (
    <tr>
      <th className={cn(styles.header, { "align-left": true })}>№ Название команды</th>
      <th className={cn(styles.header)}>Кол-во баллов</th>
      <th className={cn(styles.header)}>Звание</th>
      <th className={cn(styles.header)}>Кол-во игр</th>
      <th className={cn(styles.header)}>&nbsp;&nbsp;</th>
      <th className={cn(styles.header)}>Кол-во 1 мест</th>
      <th className={cn(styles.header)}>Кол-во 2 мест</th>
      <th className={cn(styles.header)}>Кол-во 3 мест</th>
    </tr>
  );
};
