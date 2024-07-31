import { GameModel } from "@shared/types";

export const filterSearch = (search: string) => {
  return (game: GameModel) => {
    if (!search) return true;
    return game.team.toLowerCase().includes(search.toLowerCase());
  };
};
