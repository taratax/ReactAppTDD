import type { StorybookConfig } from "@storybook/react-vite";
import globby from "globby";
const config: StorybookConfig = {
  // stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  stories: globby.sync(
    ["../src/**/*.stories.@(js|jsx|ts|tsx)", "!../src/**/node_modules/**/*"],
    { cwd: "./.storybook" },
  ),
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
