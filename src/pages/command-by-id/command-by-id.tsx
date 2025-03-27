import { Button, Flex } from "@shared/ui";
import { NavigationRoutes } from "@shared/constants";
import { useCommandById } from "./hooks";
import { useNavigate } from "react-router-dom";
import styles from "./command-by-id.module.css";
import { CommandError, CommandContent } from "./components";

export const CommandByIdPage = () => {
  const navigate = useNavigate();
  const { isLoading, isError, command, refresh } = useCommandById();

  return (
    <Flex tag="section" className={styles.container} align="center" grow={1}>
      {isError ? <CommandError isError={isError} refresh={refresh} /> : null}
      {!isError ? <CommandContent isLoading={isLoading} command={command} /> : null}
      <Button onClick={() => navigate(NavigationRoutes.ROOT)}>Вернуться обратно</Button>
    </Flex>
  );
};
