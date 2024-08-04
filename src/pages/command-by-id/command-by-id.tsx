import { Button, Flex, Typography } from "@shared/ui";
import styles from "./command-by-id.module.css";
import CaseImg from "../../../public/assets/images/case.png";
import { CommandContent } from "@pages/command-by-id/components/command-content/command-content";

export const CommandByIdPage = () => {
  return (
    <Flex tag="section" className={styles.container} align="center" grow={1}>
      <Typography variant="b700" className={styles.title}>
        статистика команды
      </Typography>
      <Typography variant="m500" className={styles.subtitle}>
        Шерлок Холмс и Ватсон
      </Typography>
      <Flex className={styles.content} vertical={false}>
        <div className={styles.left}>
          <img className={styles.case} src={CaseImg} alt="deal" />
        </div>
        <div className={styles.right}>
          <CommandContent />
        </div>
      </Flex>
      <Button>ВЕРНУТЬСЯ ОБРАТНО</Button>
    </Flex>
  );
};
