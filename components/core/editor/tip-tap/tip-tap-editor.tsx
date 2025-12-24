"use client"
import { EditorProvider } from "./editor-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toolbar } from "./tool-bar";
import { TipTap } from "./tip-tap";

const initialContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 2,                 // h2
        id: "intro-heading",      // custom id
        subtitle: "Basics Start", // custom data
        color: "#2563eb",         // custom style info
        createdBy: "admin",       // extra metadata
      },
      content: [
        {
          type: "text",
          text: "Introduction to TipTap",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Hello TipTap 👋",
        },
      ],
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
