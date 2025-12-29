"use client";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { Box } from "../../box";

export const BlockNote = () => {
  const editor = useCreateBlockNote();
  return (
    <Box style={{ minHeight: 300 }}>
      <BlockNoteView editor={editor} />
    </Box>
  );
};
