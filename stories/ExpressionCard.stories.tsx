import { Description } from "@/components/description";
import { Expression, ExpressionCard } from "@/components/expression";
import { Title } from "@/components/title";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Math/ExpressionCard",
  component: ExpressionCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ExpressionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlgebraicExpression: Story = {
  args: {
    className: "my-10",
    children: (
      <>
        <Title
          as="h4"
          className="mb-4 text-xs tracking-widest"
          textColor="text-slate-300"
        >
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
      </>
    ),
  },

  render: (args) => (
    <div className="max-w-md mx-auto">
      <ExpressionCard {...args} />
    </div>
  ),
};
