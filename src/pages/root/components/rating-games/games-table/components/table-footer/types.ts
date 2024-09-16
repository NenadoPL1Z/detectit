import { GamesTableProps } from "../../types";
export type TableFooterProps = Pick<
  GamesTableProps,
  | "isDisplayLoading"
  | "isDisplayEmpty"
  | "isDisplayError"
  | "isDisplayMore"
  | "onRetry"
  | "onLoadMore"
  | "onClear"
>;
