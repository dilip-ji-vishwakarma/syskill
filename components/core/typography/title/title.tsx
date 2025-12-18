"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textColor?: string;
  className?: string;
};

const typographyMap = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-medium",
  h6: "scroll-m-20 text-base font-medium",
} as const;

export function Title({
  children = "Paste your title",
  as: Tag = "h1",
  textColor,
  className,
}: TitleProps) {
  return (
    <Tag
      className={cn(
        typographyMap[Tag],
        "text-balance",
        textColor ?? "text-foreground",
        className
      )}
    >
      {children}
    </Tag>
  );
}
