import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "./theme";

const meta: Meta<typeof Theme> = {
  title: "Design System/ThemeToggle",
  component: Theme,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Theme>;

export const Default: Story = {};
