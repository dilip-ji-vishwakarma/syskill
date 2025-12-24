/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { PageBase } from "./toolkit/page-base";

const page = async ({ params }: any) => {
  const { story_id } = await params;
  console.log("Story ID 👉", story_id);
  return (
    <Suspense>
      <PageBase />
    </Suspense>
  );
};

export default page;
