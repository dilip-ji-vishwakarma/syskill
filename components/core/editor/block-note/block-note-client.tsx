"use client";

import dynamic from "next/dynamic";

export const BlockNoteClient = dynamic(
  () => import("./block-note").then((m) => m.BlockNote),
  { ssr: false }
);
