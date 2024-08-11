import styles from "./command-content.module.css";
import { GameModel } from "@shared/types";
import LogoDark from "@shared/assets/icons/logo-dark.svg?react";
import { Flex, Typography } from "@shared/ui";
import { CommandInfo } from "./command-info";
export const CommandContent = ({
  rank,
  total_points,
  total_games,
  first_places,
  second_places,
  third_places,
}: GameModel) => {
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
      <CommandInfo title="Звание:" value={rank} />
      <CommandInfo title="Кол-во баллов:" value={total_points ?? 0} />
      <CommandInfo title="Кол-во игр:" value={total_games ?? 0} />
      <Flex vertical={false} justify="space-between" className={styles.row}>
        <CommandInfo title="Кол-во 1 мест:" value={first_places ?? 0} />
        <CommandInfo title="Кол-во 2 мест:" value={second_places ?? 0} />
      </Flex>
      <CommandInfo title="Кол-во 3 мест:" value={third_places ?? 0} />
    </div>
  );
};
