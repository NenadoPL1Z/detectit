import axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL, TIMEOUT, VITE_APP_API_KEY } from "shared/constants";

const createInstance = () => {
  const config = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  config.interceptors.request.use(async (request) => {
    const requestConfig: InternalAxiosRequestConfig = {
      ...request,
      // eslint-disable-next-line
      // @ts-ignore
      headers: {
        "X-API-KEY": VITE_APP_API_KEY,
        ...request.headers,
      },
    };

    return requestConfig;
  });

  return config;
};

export const apiInstance = createInstance();
