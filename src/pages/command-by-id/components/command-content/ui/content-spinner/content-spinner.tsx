import { Flex } from "@shared/ui";
import Spinner from "@shared/assets/icons/spinner.svg?react";
import styles from "./content-spinner.module.css";

export const ContentSpinner = () => {
  return (
    <Flex className={styles["spinner-container"]} align="center" justify="center">
      <Spinner className={styles.spinner} />
    </Flex>
  );
};
