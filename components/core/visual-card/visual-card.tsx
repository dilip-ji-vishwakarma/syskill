"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Title } from "../typography";

type VisualCardProps = {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function VisualCard({
  title = "Visualizing Terms",
  icon,
  children,
  className,
}: VisualCardProps) {
  return (
    <section className="mb-8">
      <Card
        className={cn(
          "overflow-hidden rounded-2xl",
          className
        )}
      >
        <CardHeader className="flex h-12 flex-row items-center gap-2 border-b bg-background px-8 py-0">
          {icon ?? (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <div className="flex items-end gap-0.5">
                <span className="h-1.5 w-0.5 rounded-full bg-primary" />
                <span className="h-1.5 w-0.5 rounded-full bg-primary" />
                <span className="h-1.5 w-0.5 rounded-full bg-primary" />
              </div>
            </div>
          )}

          <Title
            as="h6"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            {title}
          </Title>
        </CardHeader>
        <CardContent className="md:px-10 pt-9">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
