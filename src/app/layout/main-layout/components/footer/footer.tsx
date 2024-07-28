import { Flex, Typography } from "@shared/ui";
import styles from "./footer.module.css";
import Logo from "@shared/assets/icons/logo.svg?react";
import VK from "@shared/assets/icons/vk.svg?react";
import INST from "@shared/assets/icons/inst.svg?react";
import { staticInfo } from "@shared/mock/static-info";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex className={styles.wrapper} align="center">
        <Logo className={styles.logo} />
        <Flex className={styles.info} vertical={false}>
          <a href={staticInfo.vk} target="_blank" rel="noreferrer">
            <VK className={styles.icon} />
          </a>
          <Flex align="center">
            <Typography className={styles.questions} variant="m400" color="gray">
              Любые вопросы по играм
            </Typography>
            <a href={`tel://${staticInfo.tel.call}`}>
              <Typography className={styles.phone} tag="span" variant="m700" centered>
                {staticInfo.tel.displayUser}
              </Typography>
            </a>
          </Flex>
          <a href={staticInfo.inst} target="_blank" rel="noreferrer">
            <INST className={styles.icon} />
          </a>
        </Flex>
      </Flex>
    </footer>
  );
};
