// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: ["./src/app/**/*.tsx","./src/components/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
  },
};

export default config;
