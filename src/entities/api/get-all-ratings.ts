import { apiInstance } from "@shared/lib";
import { GameModel } from "@shared/types";

export const apiGetAllRatings = (limit = 100000, offset = 0) =>
  apiInstance.get<GameModel[]>(`/statistic/general?limit=${limit}&offset=${offset}`);
