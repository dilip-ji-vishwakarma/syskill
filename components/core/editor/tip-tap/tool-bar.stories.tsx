import type { Meta, StoryObj } from "@storybook/react";
import { EditorProvider } from "./editor-context";
import { Toolbar } from "./tool-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Box } from "../../box";

const meta: Meta<typeof Toolbar> = {
  title: "Editor/Toolbar",
  component: Toolbar,
  decorators: [
    (Story) => (
      <EditorProvider>
        <TooltipProvider>
          <Box className="p-4 bg-white">
            <Story />
          </Box>
        </TooltipProvider>
      </EditorProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {};
