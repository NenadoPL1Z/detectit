import { apiInstance } from "@shared/lib";
import { GameModel } from "@shared/types";

export const apiGetAllRatings = () => apiInstance.get<GameModel[]>(`/statistic/general`);
