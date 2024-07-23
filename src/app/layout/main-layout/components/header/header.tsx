import { Typography } from "@shared/ui";
import styles from "./header.module.css";
import Logo from "@shared/assets/icons/logo.svg?react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <Typography variant="b700" fontSize={96}>
          Рейтинг команд
        </Typography>
      </div>
    </header>
  );
};
