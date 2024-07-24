import { GamesTableProps } from "./types";
export const GamesTable = ({ games, loading, error }: GamesTableProps) => {
  return <div>{JSON.stringify(games)}</div>;
};
