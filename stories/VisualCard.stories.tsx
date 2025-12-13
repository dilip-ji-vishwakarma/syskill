import type { Meta, StoryObj } from "@storybook/react";
import { VisualCard } from "@/components/visual-card";
import { VariableCard } from "@/components/variable-card";
import { Expression, ExpressionCard } from "@/components/expression";
import { Title } from "@/components/title";
import { Description } from "@/components/description";
import { Counter } from "@/components/counter";

const meta: Meta<typeof VisualCard> = {
  title: "Components/VisualCard",
  component: VisualCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A reusable card shell. Use `children` to inject inner UI like VariableCard, Counter and ExpressionCard.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Header title text (uppercased in the header).",
      table: { defaultValue: { summary: "Visualizing Terms" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VisualCard>;

export const Playground: Story = {
  name: "Playground",
  args: {
    title: "Visualizing Terms",
  },
  render: ({ title }) => (
    <VisualCard title={title}>
      <div className="flex items-start justify-center gap-28 mb-8 text-center">
        <VariableCard icon={<span className="text-[56px] mb-3">🍎</span>} title={"Variable 'a' (Apples)"}>
          <Counter initialValue={2} min={0} max={10} />
        </VariableCard>

        <VariableCard icon={<span className="text-[56px] mb-3">🍌</span>} title={"Variable 'b' (Bananas)"}>
          <Counter initialValue={2} min={0} max={10} />
        </VariableCard>
      </div>

      <ExpressionCard className="my-10">
        <Title as="h4" className="mb-4 text-xs tracking-widest" textColor="text-slate-300">
          THE ALGEBRAIC EXPRESSION
        </Title>

        <Expression
          terms={[
            { value: "2a", color: "text-red-400" },
            { value: "3b", color: "text-yellow-300" },
          ]}
        />

        <Description className="text-slate-400 mt-6 text-sm">
          {`Notice: You cannot combine them into "5ab" because they are different fruits (variables)!`}
        </Description>
      </ExpressionCard>
    </VisualCard>
  ),
};