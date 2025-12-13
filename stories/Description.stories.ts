import { Description } from "@/components/description";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Description> = {
  title: "Typography/Description",
  component: Description,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible text description component that supports multiple HTML tags (`p`, `span`, `label`, `div`) along with customizable Tailwind text color classes and optional custom styles.",
      },
    },
  },
  argTypes: {
    children: {
      description: "The text content inside the description component.",
      control: "text",
      table: {
        defaultValue: { summary: "Your description text" },
      },
    },
    as: {
      description: "HTML tag to render the description.",
      control: "select",
      options: ["p", "span", "label", "div"],
      table: {
        defaultValue: { summary: "p" },
      },
    },
    textColor: {
      description: "Tailwind text color class applied to the description.",
      control: "text",
      table: {
        defaultValue: { summary: "text-slate-700" },
      },
    },
    className: {
      description:
        "Additional custom class names merged with the default component styles.",
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Description>;

export const Playground: Story = {
  name: "Component Playground",
  args: {
    children: "This is a helper description text for a form field.",
    as: "p",
    textColor: "text-slate-700",
    className: "",
  },
};

export const Primary: Story = {
  args: {
    children: "Email address must include @ symbol.",
    as: "span",
    textColor: "text-slate-700",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic usage of the Description component for supporting helper or descriptive text.",
      },
      source: {
        code: `
import { Description } from "@/components/Description";

<Description as="span" textColor="text-slate-700">
  Email address must include @ symbol.
</Description>
        `.trim(),
        language: "tsx",
      },
    },
  },
};
