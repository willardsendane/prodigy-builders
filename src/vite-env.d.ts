/// <reference types="vite/client" />
/// <reference types="@uploadcare/file-uploader/types/jsx" />

interface ImportMetaEnv {
  readonly VITE_UPLOADCARE_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
