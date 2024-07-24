import { GameModel } from "@shared/types";

export const filterSearch = (search: string) => {
  return (game: GameModel) => {
    game.team.toLowerCase().includes(search.toLowerCase());
  };
};
