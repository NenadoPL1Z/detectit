import { GamesTableProps } from "../../types";
export type TableFooterProps = Pick<
  GamesTableProps,
  "loading" | "error" | "isPagination" | "games" | "onRetry" | "onLoadMore"
>;
