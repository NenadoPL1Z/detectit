import { Button, Flex, Typography } from "@shared/ui";
import styles from "./table-footer.module.css";
import Spinner from "@shared/assets/icons/spinner.svg?react";
import { TableFooterProps } from "./types";
import classnames from "classnames/bind";
const cn = classnames.bind(styles);

export const TableFooter = ({ loading, error, games, isPagination, onLoadMore, onRetry }: TableFooterProps) => {
  const isDisplayLoading = Boolean(loading && !error && !games.length);
  const isDisplayError = Boolean(error && !games.length);
  const isDisplayMore = Boolean(games.length && !error && !loading && isPagination);

  const borderOff = !isDisplayLoading && !isDisplayError && !isDisplayMore;

  return (
    <Flex className={cn(styles["table-bottom"], { "borer-off": borderOff })} align="center" justify="center">
      {isDisplayLoading && <Spinner />}
      {isDisplayMore && (
        <Button className={styles.button} onClick={onLoadMore}>
          ПОКАЗАТЬ ЕЩЕ
        </Button>
      )}
      {isDisplayError && (
        <>
          <Typography variant="m700" fontSize={24} wrap centered className={styles.error}>
            Что-то пошло не так.{"\n"} Попробуйте позже или повторите попытку
          </Typography>
          <Button className={styles.button} onClick={onRetry}>
            ПОПРОБОВАТЬ ЕЩЕ РАЗ
          </Button>
        </>
      )}
    </Flex>
  );
};
