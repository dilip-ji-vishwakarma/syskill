import type { Meta, StoryObj } from "@storybook/react";
import { VariableCard } from "@/components/variable-card";
import { Counter } from "@/components/counter";

const meta: Meta<typeof VariableCard> = {
  title: "Form/VariableCard",
  component: VariableCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A variable card component that can display an icon, a title, and any child component. Commonly used with Counter to represent numeric variables.",
      },
    },
  },
  argTypes: {
    icon: {
      description: "Optional icon displayed at the top.",
      control: false,
    },
    title: {
      description: "Title representing the variable.",
      control: "text",
      table: { defaultValue: { summary: "Variable" } },
    },
    children: {
      description: "Child content rendered inside the card (e.g., Counter).",
      control: false,
    },
    className: {
      description: "Custom class names for the card container.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof VariableCard>;

/* ---------------------------------------------------
   1) PLAYGROUND — fully interactive combined example
----------------------------------------------------- */

export const Playground: Story = {
  name: "Component Playground",
  args: {
    title: "Variable 'a' (Apples)",
    className: "",
  },
  render: (args) => (
    <VariableCard
      {...args}
      icon={<span className="text-4xl">🍎</span>}
    >
      <Counter initialValue={2} min={0} max={10} />
    </VariableCard>
  ),
};

/* ---------------------------------------------------
   2) PRIMARY STORY — clean usage + code snippet
----------------------------------------------------- */

export const Primary: Story = {
  args: {
    title: "Variable 'a' (Apples)",
  },
  render: (args) => (
    <VariableCard
      {...args}
      icon={<span className="text-4xl">🍎</span>}
    >
      <Counter initialValue={2} min={0} max={10} />
    </VariableCard>
  ),
  parameters: {
    docs: {
      description: {
        story: "A VariableCard combined with Counter to represent a numeric variable.",
      },
      source: {
        code: `
import { VariableCard } from "@/components/VariableCard";
import { Counter } from "@/components/Counter";

<VariableCard
  icon={<span className="text-4xl">🍎</span>}
  title={"Variable 'a' (Apples)"}
>
  <Counter initialValue={2} min={0} max={10} />
</VariableCard>
        `.trim(),
        language: "tsx",
      },
    },
  },
};
