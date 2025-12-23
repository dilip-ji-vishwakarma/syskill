"use client"
import { EditorProvider } from "./editor-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toolbar } from "./tool-bar";
import { TipTap } from "./tip-tap";

const initialContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [{ type: "text", text: "Hello TipTap 👋" }],
    },
  ],
};

export const TipTapEditor = () => {
  return (
    <EditorProvider>
      <TooltipProvider>
        <Toolbar />
      </TooltipProvider>
      <TipTap
        editorString={initialContent}
        onFocus={() => {
          console.log("Editor focused");
        }}
        courses={[]}
      />
    </EditorProvider>
  );
};
