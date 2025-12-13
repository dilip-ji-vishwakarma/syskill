"use client";

import React from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textColor?: string;
  className?: string;
};

const sizeMap = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
} as const;

export const Title = ({
  children = "Paste your title",
  as: Tag = "h1",
  textColor,
  className,
}: TitleProps) => {
  const defaultColor = "text-slate-900 dark:text-slate-100";
  const themeColorClass = textColor ?? defaultColor;

  return (
    <Tag
      className={cn(
        "scroll-m-20 font-semibold tracking-tight text-balance",
        sizeMap[Tag],
        themeColorClass,
        className
      )}
    >
      {children}
    </Tag>
  );
};