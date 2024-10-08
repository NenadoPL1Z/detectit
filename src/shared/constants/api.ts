export const { VITE_APP_BASE_URL, VITE_APP_API_PREFIX, VITE_APP_TIMEOUT, VITE_APP_API_KEY } = import.meta.env;
export const BASE_URL = `${VITE_APP_BASE_URL}/${VITE_APP_API_PREFIX}`;
export const TIMEOUT = isNaN(+VITE_APP_TIMEOUT) ? 30000 : +VITE_APP_TIMEOUT;
