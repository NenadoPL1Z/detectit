import { apiInstance } from "@shared/lib";

export const apiGetAllRatings = (limit = 100000, offset = 0) =>
  apiInstance.get(`/statistic/general?limit=${limit}&offset=${offset}`);
