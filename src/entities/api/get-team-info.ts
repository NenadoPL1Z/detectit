import { apiInstance } from "@shared/lib";
import { GameModel } from "@shared/types";

export const apiGetTeamInfo = (team: string) => apiInstance.get<GameModel>(`/statistic/team?team=${team + ""}`);
