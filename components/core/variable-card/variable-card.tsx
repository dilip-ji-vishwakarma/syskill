"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Title } from "../typography";

type VariableCardProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export function VariableCard({
  icon,
  title = "Variable",
  className,
  children,
}: VariableCardProps) {
  return (
    <Card
      className={cn(
        "inline-flex items-center rounded-3xl bg-background/70",
        className
      )}
    >
      <CardContent className="flex flex-col items-center gap-3 px-6 py-5">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center">
            {icon}
          </div>
        )}

        <Title
          as="h6"
          className="text-sm text-center"
        >
          {title}
        </Title>

        {children}
      </CardContent>
    </Card>
  );
}
