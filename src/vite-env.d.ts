/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string;
  readonly VITE_APP_API_PREFIX: string;
  readonly VITE_APP_TIMEOUT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
