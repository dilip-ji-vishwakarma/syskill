"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type ExpressionCardProps = {
  children?: React.ReactNode;
  className?: string;
};

export function ExpressionCard({
  children,
  className,
}: ExpressionCardProps) {
  if (!children) return null;

  return (
    <Card
      className={cn(
        "w-full rounded-3xl bg-primary text-center",
        "shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]",
        className
      )}
    >
      <CardContent className="py-10 px-6">
        {children}
      </CardContent>
    </Card>
  );
}
