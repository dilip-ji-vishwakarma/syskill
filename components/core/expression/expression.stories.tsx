import type { Meta, StoryObj } from "@storybook/react";
import { Expression } from "./expression";

const meta: Meta<typeof Expression> = {
  title: "Design System/Expression/Expression",
  component: Expression,
  tags: ["autodocs"],
  argTypes: {
    separator: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Expression>;

export const Basic: Story = {
  args: {
    separator: "+",
    terms: [
      { value: "x", tone: "accent" },
      { value: 10 },
      { value: "y", tone: "muted" },
    ],
  },
};

export const Multiplication: Story = {
  args: {
    separator: "×",
    terms: [
      { value: 2 },
      { value: "x", tone: "accent" },
      { value: 5 },
    ],
  },
};

export const MixedTones: Story = {
  args: {
    separator: "+",
    terms: [
      { value: "a", tone: "accent" },
      { value: 1 },
      { value: "b" },
      { value: 7, tone: "muted" },
    ],
  },
};
