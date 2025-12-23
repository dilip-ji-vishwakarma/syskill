// components/editor/block-note.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { BlockNote } from "./block-note";

const meta: Meta<typeof BlockNote> = {
  title: "Editor/BlockNote",
  component: BlockNote,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof BlockNote>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-white">
      <BlockNote />
    </div>
  ),
};
