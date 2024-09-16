import { GameModel } from "@shared/types";

export const getOriginalNumber = (gameDisplayed: GameModel, gamesOriginal: GameModel[]) => {
  return gamesOriginal.findIndex((game) => game.team === gameDisplayed.team) ?? 0;
};
