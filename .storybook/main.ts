import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
  "@storybook/addon-essentials",
  "@storybook/addon-docs",
],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
};

export default config;
