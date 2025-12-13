import { Counter } from "@/components/counter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Counter> = {
  title: "Form/Counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An interactive counter component with min/max limits, configurable step, and change callbacks.",
      },
    },
  },
  argTypes: {
    initialValue: {
      description: "The starting value of the counter.",
      control: { type: "number" },
      table: { defaultValue: { summary: "1" } },
    },
    min: {
      description: "Minimum value allowed.",
      control: { type: "number" },
      table: { defaultValue: { summary: "0" } },
    },
    max: {
      description: "Maximum value allowed.",
      control: { type: "number" },
      table: { defaultValue: { summary: "Infinity" } },
    },
    step: {
      description: "Increment/decrement step amount.",
      control: { type: "number" },
      table: { defaultValue: { summary: "1" } },
    },
    onChange: {
      description: "Callback function triggered when value changes.",
      action: "value changed",
    },
    className: {
      description: "Custom classes for the container.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Playground: Story = {
  name: "Component Playground",
  args: {
    initialValue: 1,
    min: 0,
    max: 10,
    step: 1,
  },
};

export const Primary: Story = {
  args: {
    initialValue: 1,
    min: 0,
    max: 5,
    step: 1,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default counter example. Supports increments, decrements, limits, and step controls.",
      },
      source: {
        code: `
import { Counter } from "@/components/Counter";

<Counter
  initialValue={1}
  min={0}
  max={5}
  step={1}
  onChange={(value) => console.log(value)}
/>
        `.trim(),
        language: "tsx",
      },
    },
  },
};