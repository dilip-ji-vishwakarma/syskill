import type { Meta, StoryObj } from "@storybook/react";
import { PageMetaHeader } from "./page-meta-header";

const meta: Meta<typeof PageMetaHeader> = {
  title: "Design System/PageMetaHeader",
  component: PageMetaHeader,
  tags: ["autodocs"],
  argTypes: {
    chapterHref: {
      control: "text",
      description: "Link for chapter breadcrumb",
    },
    gradeHref: {
      control: "text",
      description: "Link for grade breadcrumb",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageMetaHeader>;

export const Default: Story = {
  args: {
    chapter: 3,
    grade: "Grade 7",
  },
};

export const WithLinks: Story = {
  args: {
    chapter: 3,
    grade: "Grade 7",
    chapterHref: "/chapters/3",
    gradeHref: "/grades/7",
  },
};

export const OnlyChapterLink: Story = {
  args: {
    chapter: 5,
    grade: "Grade 8",
    chapterHref: "/chapters/5",
  },
};
