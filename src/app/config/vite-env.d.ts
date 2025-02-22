/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Добавь сюда другие переменные, если нужно
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
