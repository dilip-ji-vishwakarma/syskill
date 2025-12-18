import type { Meta, StoryObj } from "@storybook/react";
import { VariableCard } from "./variable-card";

const meta: Meta<typeof VariableCard> = {
  title: "Design System/VariableCard",
  component: VariableCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VariableCard>;

export const Default: Story = {
  render: () => (
    <VariableCard title="Variable">
      <span className="text-2xl font-bold text-primary">x</span>
    </VariableCard>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <VariableCard
      title="Independent Variable"
      icon={
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-xl font-bold">
          x
        </div>
      }
    >
      <span className="text-xl font-semibold text-primary">x</span>
    </VariableCard>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <VariableCard
      title="Dependent Variable"
      icon={
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-xl font-bold">
          y
        </div>
      }
    >
      <p className="text-sm text-muted-foreground text-center">
        Depends on the value of x
      </p>
    </VariableCard>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <VariableCard
      title="Custom Variable"
      className="bg-primary/10"
    >
      <span className="text-2xl font-bold text-primary">z</span>
    </VariableCard>
  ),
};
