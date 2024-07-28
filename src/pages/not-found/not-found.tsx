import { Flex, Typography } from "@shared/ui";
import { Link } from "react-router-dom";
import { NavigationRoutes } from "@shared/constants";
import styles from "./not-found.module.css";

export const NotFoundPage = () => {
  return (
    <Flex className={styles.container} grow="1" align="center" justify="center">
      <Flex className={styles.wrapper} align="center">
        <Typography className={styles.title} variant="b700">
          404
        </Typography>
        <Typography className={styles.description} variant="m500" centered>
          В данный момент идет расследование этого дела, а пока вы можете вернуться на{" "}
          <Link to={NavigationRoutes.ROOT}>
            <Typography tag="span" variant="m700" underline centered>
              главную
            </Typography>
          </Link>
        </Typography>
      </Flex>
    </Flex>
  );
};
