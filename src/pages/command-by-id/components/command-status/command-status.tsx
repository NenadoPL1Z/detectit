import { Button, Flex, Typography } from "@shared/ui";
import styles from "./command-status.module.css";
import { CommandStatusProps } from "./types";
import Spinner from "@shared/assets/icons/spinner.svg?react";

export const CommandStatus = ({ isLoading, isError, refresh }: CommandStatusProps) => (
  <Flex align="center" justify="center" grow={1}>
    {isLoading && <Spinner className={styles.spinner} />}
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
