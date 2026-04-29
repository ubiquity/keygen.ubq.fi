import esbuild from "esbuild";
import { createRequire } from "node:module";

const require = createRequire(`${process.cwd()}/package.json`);
const libsodiumWrappersPath = require.resolve("libsodium-wrappers");

const typescriptEntries = ["static/scripts/key-generator/keygen.ts"];
const cssEntries = ["static/styles/rewards/rewards.css", "static/styles/audit-report/audit.css", "static/styles/onboarding/onboarding.css"];
export const entries = [...typescriptEntries, ...cssEntries];

export const esBuildContext: esbuild.BuildOptions = {
  sourcemap: true,
  entryPoints: entries,
  bundle: true,
  minify: false,
  loader: {
    ".png": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".eot": "dataurl",
    ".ttf": "dataurl",
    ".svg": "dataurl",
  },
  plugins: [
    {
      name: "libsodium-wrappers-cjs",
      setup(build) {
        build.onResolve({ filter: /^libsodium-wrappers$/ }, () => ({ path: libsodiumWrappersPath }));
      },
    },
  ],
  outdir: "static/out",
};

esbuild
  .build(esBuildContext)
  .then(() => {
    console.log("\tesbuild complete");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
