import { Flex, Typography } from "@shared/ui";
import { Link } from "react-router-dom";
import { NavigationRoutes } from "@shared/constants";
import styles from "./not-found.module.css";

export const NotFoundPage = () => {
  return (
    <Flex grow="1" align="center" justify="center">
      <Typography variant="b700" fontSize={350} lineHeight={350}>
        404
      </Typography>
      <Typography className={styles.wrapText} variant="m500" fontSize={48} centered>
        В данный момент идет расследование этого дела,{"\n"} а пока вы можете вернуться на{" "}
        <Link to={NavigationRoutes.ROOT}>
          <Typography tag="span" variant="m700" fontSize={48} underline centered>
            главную
          </Typography>
        </Link>
      </Typography>
    </Flex>
  );
};
