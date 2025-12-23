"use client";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

export const BlockNote = () => {
  const editor = useCreateBlockNote();
  return (
    <div style={{ minHeight: 300 }}>
      <BlockNoteView editor={editor} />
    </div>
  );
};
