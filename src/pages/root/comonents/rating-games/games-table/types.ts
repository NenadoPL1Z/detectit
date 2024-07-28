import { GameModel } from "@shared/types";

export type GamesTableProps = {
  games: GameModel[];
  isDisplayLoading: boolean;
  isDisplayEmpty: boolean;
  isDisplayError: boolean;
  isDisplayMore: boolean;
  onLoadMore: () => void;
  onRetry: () => void;
  onClear: () => void;
};
