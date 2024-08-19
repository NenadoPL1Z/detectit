import { apiInstance } from "@shared/lib";
import { TeamModel } from "@shared/types";

export const apiGetTeamInfo = (team: string) => apiInstance.get<TeamModel>(`/statistic/team?team=${team + ""}`);
