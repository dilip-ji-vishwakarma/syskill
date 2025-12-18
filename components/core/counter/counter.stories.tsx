import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./counter";

const meta: Meta<typeof Counter> = {
  title: "Design System/Counter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {
    initialValue: {
      control: { type: "number" },
    },
    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
    onChange: {
      action: "changed",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    initialValue: 1,
    min: 0,
    max: 10,
    step: 1,
  },
};

export const WithStep: Story = {
  args: {
    initialValue: 10,
    min: 0,
    max: 100,
    step: 5,
  },
};

export const MinReached: Story = {
  args: {
    initialValue: 0,
    min: 0,
    max: 10,
  },
};

export const MaxReached: Story = {
  args: {
    initialValue: 10,
    min: 0,
    max: 10,
  },
};

export const LargeRange: Story = {
  args: {
    initialValue: 50,
    min: 0,
    max: 1000,
    step: 10,
  },
};
