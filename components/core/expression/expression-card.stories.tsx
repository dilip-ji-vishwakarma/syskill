import type { Meta, StoryObj } from "@storybook/react";
import { ExpressionCard } from "./expression-card";
import { Expression } from "./expression";

const meta: Meta<typeof ExpressionCard> = {
  title: "Design System/Expression/ExpressionCard",
  component: ExpressionCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExpressionCard>;

export const Default: Story = {
  render: () => (
    <ExpressionCard>
      <Expression
        terms={[
          { value: "x", tone: "accent" },
          { value: 5 },
          { value: "y", tone: "muted" },
        ]}
        separator="+"
      />
    </ExpressionCard>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <ExpressionCard>
      <div className="space-y-4">
        <div className="text-white text-lg font-semibold">
          Solve the expression
        </div>
        <Expression
          terms={[
            { value: "a", tone: "accent" },
            { value: 3 },
            { value: "b" },
          ]}
          separator="-"
        />
      </div>
    </ExpressionCard>
  ),
};
