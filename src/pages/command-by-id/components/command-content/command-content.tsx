import styles from "./command-content.module.css";
import { TeamModel } from "@shared/types";
import LogoDark from "@shared/assets/icons/logo-dark.svg?react";
import { Flex, Typography } from "@shared/ui";
import { CommandInfo } from "./command-info";
export const CommandContent = ({
  rank,
  total_games,
  correct_answers_percentage,
  secrets_taken,
  prize_places,
}: Omit<TeamModel, "team">) => {
  return (
    <div className={styles.container}>
      <Flex vertical={false} align="center" className={styles["logo-container"]}>
        <LogoDark className={styles.logo} />
        <div>
          <Typography variant="m700" color="black" className={styles.report}>
            Отчет детектива
          </Typography>
          <Typography variant="m400" color="black" className={styles.case}>
            Личное дело
          </Typography>
        </div>
      </Flex>
      <CommandInfo title="Звание:" value={rank} underline />
      <CommandInfo title="Всего игр:" value={total_games ?? 0} />
      <Flex vertical className={styles.bottom}>
        <CommandInfo title="Процент правильных ответов:" value={correct_answers_percentage ?? 0} />
        <CommandInfo title="Взято секретов:" value={secrets_taken ?? 0} />
        <CommandInfo title="Призовые места:" value={prize_places ?? 0} />
      </Flex>
    </div>
  );
};
