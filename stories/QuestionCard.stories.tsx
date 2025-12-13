/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionCard } from "@/components/question-card";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof QuestionCard> = {
  title: "Components/QuestionCard",
  component: QuestionCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple question card with selectable options. Uses Tailwind `dark:` classes so a wrapper with `class='dark'` will toggle dark mode visuals.",
      },
    },
  },
  argTypes: {
    question: {
      description: "Question text to display.",
      control: "text",
      table: { defaultValue: { summary: "No question provided" } },
    },
    options: {
      description:
        "Array of option objects. Each option should have `{ id, label, isCorrect? }`. Use the object control to edit.",
      control: "object",
      table: { type: { summary: "Option[]" } },
    },
    initialSelected: {
      description: "Optional initial selected option id.",
      control: "text",
      table: { defaultValue: { summary: "null" } },
    },
  },
  decorators: [
    (Story, context) => {
      const useDark = Boolean((context.args as any).__dark);
      return (
        <div className={useDark ? "dark" : ""}>
          <div className="p-6 bg-white dark:bg-slate-900 min-h-[200px]">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof QuestionCard>;

export const Playground: Story = {
  name: "Playground",
  args: {
    question: "Which of the following terms are 'Like Terms'?",
    options: [
      { id: "o1", label: "3x and 4y", isCorrect: false },
      { id: "o2", label: "5x and 5", isCorrect: false },
      { id: "o3", label: "2x and 7x", isCorrect: true },
      { id: "o4", label: React.createElement("span", null, "x and x", React.createElement("sup", null, "2")), isCorrect: false },
    ],
    initialSelected: null,
  },
};

export const NoOptions: Story = {
  name: "No options",
  args: {
    question: "This question has no options",
    options: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Renders a friendly 'No options available' message when `options` is empty or not provided.",
      },
    },
  },
};

export const MultipleQuestions: Story = {
  name: "Multiple questions (demo)",
  render: () => {
    const questions = [
      {
        id: "q1",
        question: "Which of the following terms are 'Like Terms'?",
        options: [
          { id: "q1o1", label: "3x and 4y", isCorrect: false },
          { id: "q1o2", label: "5x and 5", isCorrect: false },
          { id: "q1o3", label: "2x and 7x", isCorrect: true },
          { id: "q1o4", label: <>x and x<sup>2</sup></>, isCorrect: false },
        ],
      },
      {
        id: "q2",
        question: "Pick the prime number:",
        options: [
          { id: "q2o1", label: "8", isCorrect: false },
          { id: "q2o2", label: "13", isCorrect: true },
          { id: "q2o3", label: "21", isCorrect: false },
        ],
      },
    ];

    return (
      <div className="space-y-6 max-w-[720px]">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q.question} options={q.options as any} />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Example showing how to render multiple `QuestionCard` components in a page.",
      },
    },
  },
};
