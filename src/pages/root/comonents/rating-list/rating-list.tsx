import { Flex } from "@shared/ui";
import { Input, Button } from "@shared/ui";
import styles from "./raiting-list.module.css";
import { useEffect, useState } from "react";
import { apiGetAllRatings } from "@entities/api";

export const RatingList = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    apiGetAllRatings();
  }, []);

  return (
    <Flex tag="section" className={styles.container} vertical>
      <Flex vertical={false} align="center" gap={8}>
        <Input
          className={styles.input}
          placeholder="Название команды"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className={styles.button}>ПОСМОТРЕТЬ СТАТИСТИКУ</Button>
      </Flex>
    </Flex>
  );
};
