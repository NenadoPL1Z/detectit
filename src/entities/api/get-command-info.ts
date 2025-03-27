import { apiInstance } from "@shared/lib";
import { CommandModel } from "@shared/types";

export const apiGetCommandInfo = (commandSlug: string) =>
  apiInstance.get<CommandModel>(`/statistic/team?team=${commandSlug}`);
