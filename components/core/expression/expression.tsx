"use client";

import { cn } from "@/lib/utils";

type ExpressionTerm = {
  value: string | number;
  tone?: "default" | "accent" | "muted";
};

type ExpressionProps = {
  terms?: ExpressionTerm[];
  separator?: string;
  className?: string;
};

const toneMap = {
  default: "text-info",
  accent: "text-info",
  muted: "text-muted-foreground",
};

export function Expression({
  terms = [],
  separator = "+",
  className,
}: ExpressionProps) {
  if (terms.length === 0) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3",
        "text-3xl font-bold",
        className
      )}
    >
      {terms.map((term, index) => (
        <div key={index} className="flex items-center gap-3">
          {index > 0 && (
            <span className="text-warning">
              {separator}
            </span>
          )}

          <span className={toneMap[term.tone ?? "default"]}>
            {term.value}
          </span>
        </div>
      ))}
    </div>
  );
}
