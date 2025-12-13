import { PageMetaHeader } from "@/components/page-meta-header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PageMetaHeader> = {
  title: "Meta/Page Meta Header",
  component: PageMetaHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A small meta header that shows the current chapter name/number and grade. Useful on top of worksheet or chapter pages.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageMetaHeader>;

export const Playground: Story = {
  name: "Component Playground",
  args: {
    chapter: "1",
    grade: "Grade 6 • Mathematics",
    bgColor: "bg-[#e3ebff]",
    textColor: "text-[#2563eb]",
  },
};

export const Primary: Story = {
  args: {
    chapter: "1",
    grade: "Grade 6 • Mathematics",
    bgColor: "bg-[#e3ebff]",
    textColor: "text-[#2563eb]",
  },
  parameters: {
    docs: {
      description: {
        story: "Primary appearance.",
      },
      source: {
        code: `
import { PageMetaHeader } from "@/components/PageMetaHeader";

<PageMetaHeader
  chapter="1"
  grade="Grade 6 • Mathematics"
  bgColor="bg-[#e3ebff]"
  textColor="text-[#2563eb]"
/>
        `.trim(),
        language: "tsx",
      },
    },
  },
};
