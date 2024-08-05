import { Button, Flex, Typography } from "@shared/ui";
import styles from "./command-by-id.module.css";
import CaseImg from "../../../public/assets/images/case.png";
import { CommandContent } from "./components/command-content";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavigationRoutes } from "@shared/constants";
import { GameModel } from "@shared/types";

export const CommandByIdPage = () => {
  const { state } = useLocation();
  // const [isLoading, setIsLoading] = useState<boolean>(!state);
  // const [error, setError] = useState("");
  const [game] = useState<GameModel>(state);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Flex tag="section" className={styles.container} align="center" grow={1}>
      <Typography variant="b700" className={styles.title}>
        статистика команды
      </Typography>
      <Typography variant="m500" className={styles.subtitle}>
        {game?.team}
      </Typography>
      <Flex className={styles.content} vertical={false}>
        <div className={styles.left}>
          <img className={styles.case} src={CaseImg} alt="deal" />
        </div>
        <div className={styles.right}>
          <CommandContent />
        </div>
      </Flex>
      <Button>
        <Link to={NavigationRoutes.ROOT}>Вернуться обратно</Link>
      </Button>
    </Flex>
  );
};
