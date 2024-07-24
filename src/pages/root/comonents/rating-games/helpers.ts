import { GameModel } from "@shared/types";

export const filterSearch = (search: string) => {
  return (game: GameModel) => {
    if (!search) return true;
    game.team.toLowerCase().includes(search.toLowerCase());
  };
};
