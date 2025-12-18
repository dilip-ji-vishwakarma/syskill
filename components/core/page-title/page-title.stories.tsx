import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./page-title";

const meta: Meta<typeof PageTitle> = {
  title: "Design System/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    subtitle: "Overview of your application",
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Settings",
  },
};
