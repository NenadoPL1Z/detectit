import { GameModel } from "@shared/types";

export type GamesTableProps = {
  games: GameModel[];
  loading: boolean;
  error: string;
};
