import type { Meta, StoryObj } from "@storybook/react";
import { EditorProvider } from "./editor-context";
import { TipTap } from "./tip-tap";

const meta: Meta<typeof TipTap> = {
  title: "Editor/TipTap",
  component: TipTap,
};

export default meta;

type Story = StoryObj<typeof TipTap>;

export const Default: Story = {
  render: () => (
    <EditorProvider>
      <TipTap
        editorString="<h2>TipTap in Storybook</h2><p>Edit me ✨</p>"
        onFocus={() => {}}
        courses={[]}
      />
    </EditorProvider>
  ),
};
