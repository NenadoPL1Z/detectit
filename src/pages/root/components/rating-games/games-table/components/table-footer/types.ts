import { GamesTableProps } from "../../types";
export type TableFooterProps = Pick<
  GamesTableProps,
  | "isDisplayLoading"
  | "isDisplayEmpty"
  | "isDisplayError"
  | "isDisplayMore"
  | "games"
  | "onRetry"
  | "onLoadMore"
  | "onClear"
>;
