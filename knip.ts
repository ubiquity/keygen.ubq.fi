import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["static/scripts/key-generator/keygen.ts"],
  project: ["static/**/*.ts"],
  ignoreExportsUsedInFile: true,
  ignoreDependencies: ["libsodium-wrappers", "eslint-config-prettier", "eslint-plugin-prettier"],
};

export default config;
