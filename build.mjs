import { build } from "esbuild"

await build({
  entryPoints: ["index.tsx"],
  bundle: true,
  format: "esm",
  outfile: "dist/index.js",
  jsx: "automatic",
  jsxImportSource: "@opentui/solid",
  external: ["@opentui/solid/jsx-runtime", "@opencode-ai/plugin"],
  sourcemap: false,
  target: "esnext",
  logLevel: "info",
})