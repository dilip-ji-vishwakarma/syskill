import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Typography/Title",
  component: Title,
  tags: ["autodocs"],
  args: {
    children: "This is a title",
    as: "h1",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: {
    as: "h1",
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    as: "h4",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    as: "h5",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    as: "h6",
    children: "Heading 6",
  },
};