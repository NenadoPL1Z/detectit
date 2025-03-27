import { CommandContentProps } from "./types";
import { Flex, Typography } from "@shared/ui";
import styles from "./command-content.module.css";
import { CommandDossier } from "./components";

export const CommandContent = ({ command }: CommandContentProps) => {
  const { team } = command;

  return (
    <Flex className={styles.container} grow={1}>
      <Typography variant="b700" className={styles.title}>
        статистика команды
      </Typography>
      <Typography variant="m500" className={styles.subtitle}>
        {team}
      </Typography>
      <Flex align="center" justify="center" grow={1}>
        <div className={styles.wrapper}>
          <CommandDossier {...command} />
        </div>
      </Flex>
    </Flex>
  );
};
