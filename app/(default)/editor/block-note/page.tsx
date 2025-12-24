import { PageTitle } from "@/components/core";
import { BlockNoteClient } from "@/components/core/editor";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle
        title="Content Editor"
        titleClassName="text-xl md:text-2xl lg:text-3xl"
        subtitle="Start writing your notes using the block-based editor."
      />
      <BlockNoteClient />
    </>
  );
};

export default Page;
