import { Flex, Typography } from "@shared/ui";
import styles from "./footer.module.css";
import Logo from "@shared/assets/icons/logo-footer.svg?react";
import VK from "@shared/assets/icons/vk.svg?react";
import INST from "@shared/assets/icons/inst.svg?react";
import { staticInfo } from "@shared/mock/static-info";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex className={styles.wrapper} align="center">
        <Logo className={styles.logo} />
        <Flex vertical={false} gap={36}>
          <a href={staticInfo.vk} target="_blank" rel="noreferrer">
            <VK />
          </a>
          <Flex align="center">
            <Typography className={styles.game} variant="m400" fontSize={16} lineHeight={18} color="gray">
              Любые вопросы по играм
            </Typography>
            <a href={`tel://${staticInfo.tel.call}`}>
              <Typography tag="span" variant="m700" fontSize={20} lineHeight={29} centered>
                {staticInfo.tel.displayUser}
              </Typography>
            </a>
          </Flex>
          <a href={staticInfo.inst} target="_blank" rel="noreferrer">
            <INST />
          </a>
        </Flex>
      </Flex>
    </footer>
  );
};
