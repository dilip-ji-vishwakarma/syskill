"use client";

import React from "react";
import { cn } from "@/lib/utils";

type DescriptionProps = {
  children?: React.ReactNode;
  as?: "p" | "span" | "label" | "div";
  textColor?: string;
  className?: string;
};

export const Description = ({
  children = "Your label text",
  as: Tag = "p",
  textColor,
  className,
}: DescriptionProps) => {
  const defaultColor = "text-slate-700 dark:text-slate-400";
  const resolvedColor = textColor ?? defaultColor;

  return (
    <Tag
      className={cn(
        "text-[13px] leading-relaxed",
        resolvedColor,
        className
      )}
    >
      {children}
    </Tag>
  );
};