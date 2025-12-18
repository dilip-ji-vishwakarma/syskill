import type { Meta, StoryObj } from "@storybook/react";
import { VisualCard } from "./visual-card";
import { VariableCard } from "../variable-card/variable-card";
import { ExpressionCard } from "../expression/expression-card";
import { Expression } from "../expression/expression";

const meta: Meta<typeof VisualCard> = {
  title: "Design System/VisualCard",
  component: VisualCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VisualCard>;

export const Default: Story = {
  render: () => (
    <VisualCard title="Visualizing Terms">
      <div className="text-sm text-muted-foreground">
        This section helps visualize algebraic terms.
      </div>
    </VisualCard>
  ),
};

export const WithVariables: Story = {
  render: () => (
    <VisualCard title="Variables">
      <div className="flex gap-6">
        <VariableCard title="Independent">
          <span className="text-xl font-bold text-primary">x</span>
        </VariableCard>

        <VariableCard title="Dependent">
          <span className="text-xl font-bold text-primary">y</span>
        </VariableCard>
      </div>
    </VisualCard>
  ),
};

export const WithExpression: Story = {
  render: () => (
    <VisualCard title="Expression">
      <ExpressionCard>
        <Expression
          terms={[
            { value: "x", tone: "accent" },
            { value: 3 },
            { value: "y", tone: "muted" },
          ]}
          separator="+"
        />
      </ExpressionCard>
    </VisualCard>
  ),
};

export const CustomHeaderIcon: Story = {
  render: () => (
    <VisualCard
      title="Custom Visual"
      icon={
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          ★
        </div>
      }
    >
      <p className="text-sm text-muted-foreground">
        Custom icon passed to header.
      </p>
    </VisualCard>
  ),
};
