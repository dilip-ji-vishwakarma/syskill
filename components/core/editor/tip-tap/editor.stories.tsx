"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { EditorProvider } from "./editor-context";
import { TipTap } from "./tip-tap";
import { Toolbar } from "./tool-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Box } from "../../box";

const meta: Meta = {
  title: "Editor/Tip Tap Editor",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <EditorProvider>
      <TooltipProvider>
        <Box className="min-h-screen bg-gray-50">
          {/* Toolbar */}
          <Box className="sticky top-0 z-20">
            <Toolbar />
          </Box>

          {/* Editor */}
          <Box className="px-6">
            <TipTap
              editorString="<h2>TipTap in Storybook</h2><p>Edit me ✨</p>"
              onFocus={() => {}}
              courses={[]}
            />
          </Box>
        </Box>
      </TooltipProvider>
    </EditorProvider>
  ),
};
