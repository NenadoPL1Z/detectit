import { Typography } from "@shared/ui";
import styles from "./header.module.css";
import Logo from "@shared/assets/icons/logo.svg?react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.backdoor}>
          <Logo className={styles.logo} />
          <Typography className={styles.title} variant="b700">
            Рейтинг команд
          </Typography>
        </div>
      </div>
    </header>
  );
};
