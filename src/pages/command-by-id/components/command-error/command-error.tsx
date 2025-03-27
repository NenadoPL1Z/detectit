import { Button, Flex, Typography } from "@shared/ui";
import styles from "./command-error.module.css";
import { CommandErrorProps } from "./types";

export const CommandError = ({ isError, refresh }: CommandErrorProps) => (
  <Flex align="center" justify="center" grow={1}>
    {isError && (
      <Flex className={styles.error} align="center">
        <Typography variant="b700" color="white" className={styles["error-text"]}>
          Ошибка при попытке получения информации о команде
        </Typography>
        <Button onClick={refresh} inverted>
          ПОПРОБОВАТЬ ЕЩЕ РАЗ
        </Button>
      </Flex>
    )}
  </Flex>
);
