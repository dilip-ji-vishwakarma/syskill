"use client";
import React from "react";
import { cn } from "@/lib/utils";

type ExpressionCardProps = {
  children?: React.ReactNode;
  className?: unknown;
};

const isRenderable = (node: React.ReactNode) =>
  node !== null && node !== undefined && node !== false;

export const ExpressionCard = ({
  children,
  className,
}: ExpressionCardProps) => {
  if (!isRenderable(children)) return null;

  return (
    <div
      className={cn(
        "w-full rounded-3xl bg-primary text-center py-10 px-6 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]",
        typeof className === "string" && className
      )}
    >
      {children}
    </div>
  );
};
