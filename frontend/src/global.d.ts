/// <reference types="vite/client" />

declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.sass";

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_STATIC_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
