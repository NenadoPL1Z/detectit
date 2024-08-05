import { Button, Flex, Typography } from "@shared/ui";
import styles from "./command-by-id.module.css";
import CaseImg from "../../../public/assets/images/case.png";
import { CommandContent } from "./components/command-content";
import { CommandPhoto } from "./components/command-photo";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameModel } from "@shared/types";
import { NavigationRoutes } from "@shared/constants";
import Spinner from "@shared/assets/icons/spinner.svg?react";

export const CommandByIdPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [game] = useState<GameModel>(state);
  const [isLoading] = useState<boolean>(!state);
  const [error] = useState("");
  const isState = isLoading || error;

  const handleRetry = () => {
    //
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Flex tag="section" className={styles.container} align="center" grow={1}>
      <Typography variant="b700" className={styles.title}>
        статистика команды
      </Typography>
      <Typography variant="m500" className={styles.subtitle}>
        {game?.team ?? "Загрузка..."}
      </Typography>
      <Flex className={styles.content} vertical={false}>
        <div className={styles.left}>
          <img className={styles.case} src={CaseImg} alt="deal" />
        </div>
        <div className={styles.right}>
          {isState && (
            <Flex className={styles.state} align="center" justify="center">
              {isLoading && <Spinner className={styles.spinner} />}
              {error && (
                <Flex align="center">
                  <Typography variant="m500" color="black" className={styles.error}>
                    Что-то пошло не так
                  </Typography>
                  <Button onClick={handleRetry}>ПОПРОБОВАТЬ ЕЩЕ РАЗ</Button>
                </Flex>
              )}
            </Flex>
          )}
          {!isState && (
            <>
              <CommandPhoto total_points={game.total_points} />
              <CommandContent {...game} />
            </>
          )}
        </div>
      </Flex>
      <Button onClick={() => navigate(NavigationRoutes.ROOT)}>Вернуться обратно</Button>
    </Flex>
  );
};
