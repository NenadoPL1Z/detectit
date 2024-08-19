import { Button, Flex, Typography } from "@shared/ui";
import styles from "./command-by-id.module.css";
import CaseImg from "../../../public/assets/images/case.png";
import { CommandContent } from "./components/command-content";
import { CommandPhoto } from "./components/command-photo";
import { NavigationRoutes } from "@shared/constants";
import Spinner from "@shared/assets/icons/spinner.svg?react";
import { useCommandById } from "./use-command-by-id";
import { useNavigate } from "react-router-dom";

export const CommandByIdPage = () => {
  const navigate = useNavigate();
  const { isLoading, isError, team, getTeamInfo } = useCommandById();

  return (
    <Flex tag="section" className={styles.container} align="center" grow={1}>
      <Typography variant="b700" className={styles.title}>
        статистика команды
      </Typography>
      <Typography variant="m500" className={styles.subtitle}>
        {isLoading ? "Загрузка..." : isError ? "Ошибка" : team.team}
      </Typography>
      <Flex className={styles.content} vertical={false}>
        <div className={styles.left}>
          <img className={styles.case} src={CaseImg} alt="deal" />
        </div>
        <div className={styles.right}>
          {isLoading || isError ? (
            <Flex className={styles.state} align="center" justify="center">
              {isLoading && <Spinner className={styles.spinner} />}
              {isError && (
                <Flex align="center">
                  <Typography variant="m500" color="black" className={styles.error}>
                    Что-то пошло не так
                  </Typography>
                  <Button onClick={getTeamInfo}>ПОПРОБОВАТЬ ЕЩЕ РАЗ</Button>
                </Flex>
              )}
            </Flex>
          ) : (
            <>
              <CommandPhoto rank={team.rank} />
              <CommandContent {...team} />
            </>
          )}
        </div>
      </Flex>
      <Button onClick={() => navigate(NavigationRoutes.ROOT)}>Вернуться обратно</Button>
    </Flex>
  );
};
