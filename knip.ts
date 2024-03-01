import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["build/index.ts"],
  project: ["src/**/*.ts"],
  ignore: ["src/types/config.ts"],
  ignoreExportsUsedInFile: true,
  ignoreDependencies: ["libsodium-wrappers", "eslint-config-prettier", "eslint-plugin-prettier"],
};

export default config;
