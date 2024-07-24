import { GamesTableProps } from "./types";
import Spinner from "@shared/assets/icons/spinner.svg?react";
export const GamesTable = ({ loading }: GamesTableProps) => {
  return <div>{loading && <Spinner />}</div>;
};
