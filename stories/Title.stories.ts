import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "@/components/title";

const meta: Meta<typeof Title> = {
  title: "Typography/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A flexible title component that supports multiple heading levels (h1–h6).

### Key Behaviours
- Typography is derived automatically from the \`as\` prop
- Uses **theme-based text colors** (e.g. \`text-default\`)
- **API-safe by design**:
  - Invalid or missing data does **not crash the UI**
  - Component silently fails (renders nothing) for malformed JSON
        `.trim(),
      },
    },
  },
  argTypes: {
    children: {
      description: "Text content inside the heading.",
      control: "text",
      table: {
        defaultValue: { summary: "Algebraic Expressions" },
      },
    },
    as: {
      description:
        "HTML heading tag to render. Controls the font size via the internal size map.",
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      table: {
        defaultValue: { summary: "h1" },
      },
    },
    textColor: {
      description:
        "Theme-based Tailwind text color class (e.g. text-default, text-primary).",
      control: "text",
      table: {
        defaultValue: { summary: "text-default" },
      },
    },
    className: {
      description: "Additional custom classes merged with the default styles.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Playground: Story = {
  name: "Playground",
  args: {
    children: "Algebraic Expressions",
    as: "h1",
    textColor: "text-default",
    className: "",
  },
};

export const Primary: Story = {
  name: "Primary",
  args: {
    children: "Algebraic Expressions",
    as: "h2",
    textColor: "text-default",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default usage of the Title component with theme-based color and automatic typography.",
      },
      source: {
        code: `
import { Title } from "@/components/title";

<Title as="h2" textColor="text-default">
  Algebraic Expressions
</Title>
        `.trim(),
        language: "tsx",
      },
    },
  },
};

