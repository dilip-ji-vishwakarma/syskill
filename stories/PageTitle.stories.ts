import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "@/components/page-title";

const meta: Meta<typeof PageTitle> = {
  title: "Typography/Page Title",
  component: PageTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Page-level heading with optional subtitle. Supports custom Tailwind text colors via props.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Main page heading text.",
      control: "text",
    },
    subtitle: {
      description: "Secondary subtitle text displayed under the heading.",
      control: "text",
    },
    titleColor: {
      description: "Tailwind text color class for the heading.",
      control: "text",
      table: {
        defaultValue: { summary: "text-slate-900" },
      },
    },
    subtitleColor: {
      description: "Tailwind text color class for the subtitle.",
      control: "text",
      table: {
        defaultValue: { summary: "text-slate-600" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageTitle>;

export const Playground: Story = {
  name: "Component Playground",
  args: {
    title: "Algebraic Expressions",
    subtitle: "Variables are just placeholders for numbers.",
    titleColor: "text-slate-900",
    subtitleColor: "text-slate-600",
  },
};

export const Primary: Story = {
  args: {
    title: "Algebraic Expressions",
    subtitle: "Variables are just placeholders for numbers.",
    titleColor: "text-slate-900",
    subtitleColor: "text-slate-600",
  },
  parameters: {
    docs: {
      description: {
        story: "Default usage for a page heading with subtitle.",
      },
      source: {
        code: `
import { PageTitle } from "@/components/PageTitle";

<PageTitle
  title="Algebraic Expressions"
  subtitle="Variables are just placeholders for numbers."
  titleColor="text-slate-900"
  subtitleColor="text-slate-600"
/>
        `.trim(),
        language: "tsx",
      },
    },
  },
};
