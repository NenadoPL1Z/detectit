import axios from "axios";
import { BASE_URL, TIMEOUT } from "../../../shared";

const createInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });
};

export const apiInstance = createInstance();
