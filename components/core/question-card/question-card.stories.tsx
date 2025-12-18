import type { Meta, StoryObj } from "@storybook/react";
import { QuestionCard } from "./question-card";

const meta: Meta<typeof QuestionCard> = {
  title: "Design System/QuestionCard",
  component: QuestionCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof QuestionCard>;

export const Default: Story = {
  args: {
    question: "Which of the following is a variable?",
    options: [
      { id: 1, label: "5", isCorrect: false },
      { id: 2, label: "x", isCorrect: true },
      { id: 3, label: "10", isCorrect: false },
    ],
  },
};

export const WithInitialSelection: Story = {
  args: {
    question: "Which of the following is a constant?",
    initialSelected: 1,
    options: [
      { id: 1, label: "7", isCorrect: true },
      { id: 2, label: "y", isCorrect: false },
      { id: 3, label: "z", isCorrect: false },
    ],
  },
};

export const AllIncorrect: Story = {
  args: {
    question: "Select the variable",
    options: [
      { id: 1, label: "2", isCorrect: false },
      { id: 2, label: "3", isCorrect: false },
      { id: 3, label: "4", isCorrect: false },
    ],
  },
};

export const NoOptions: Story = {
  args: {
    question: "This question has no options",
    options: [],
  },
};
