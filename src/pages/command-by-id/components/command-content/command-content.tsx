import { CommandContentProps } from "./types";
import { Flex } from "@shared/ui";
import styles from "./command-content.module.css";
import { CommandDossier } from "./components";
import { ContentTitles, ContentSpinner } from "./ui";

export const CommandContent = ({ isLoading, command }: CommandContentProps) => {
  return (
    <Flex className={styles.container} grow={1}>
      <ContentTitles team={command?.team} />
      <Flex align="center" justify="center" grow={1}>
        <div className={styles.background}>
          <div className={styles.dossier}>
            {isLoading ? <ContentSpinner /> : null}
            {command ? <CommandDossier {...command} /> : null}
          </div>
        </div>
      </Flex>
    </Flex>
  );
};
