import { CommandDossierProps } from "./types";
import styles from "./command-dossier.module.css";
import { Flex, Typography } from "@shared/ui";
import LogoDark from "@shared/assets/icons/logo-dark.svg?react";
import { DossierInfo, DossierPhoto } from "./ui";

export const CommandDossier = ({
  rank,
  total_games,
  correct_answers_percentage,
  secrets_taken,
  prize_places,
}: CommandDossierProps) => {
  return (
    <div className={styles.container}>
      <DossierPhoto rank={rank} />
      <div className={styles.wrapper}>
        <Flex vertical={false} align="center" className={styles.logo}>
          <LogoDark className={styles["logo-icon"]} />
          <div>
            <Typography variant="m700" color="black" className={styles.report}>
              Отчет детектива
            </Typography>
            <Typography variant="m400" color="black" className={styles.case}>
              Личное дело
            </Typography>
          </div>
        </Flex>
        <DossierInfo title="Звание:" value={rank} underline />
        <DossierInfo title="Всего игр:" value={total_games ?? 0} />
        <Flex vertical className={styles["last-info"]}>
          <DossierInfo title="Процент правильных ответов:" value={correct_answers_percentage ?? 0} />
          <DossierInfo title="Взято секретов:" value={secrets_taken ?? 0} />
          <DossierInfo title="Призовые места:" value={prize_places ?? 0} />
        </Flex>
      </div>
    </div>
  );
};
