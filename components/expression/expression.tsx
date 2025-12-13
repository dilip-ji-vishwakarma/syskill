/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/lib/utils";

type ExpressionProps = {
  terms?: unknown;
  separator?: unknown;
  className?: string;
};

const isValidTerm = (term: any): term is { value: string | number; color?: string } =>
  term &&
  typeof term === "object" &&
  (typeof term.value === "string" || typeof term.value === "number");

const safeSeparator = (sep: unknown) =>
  typeof sep === "string" && sep.length > 0 ? sep : "+";

export const Expression = ({
  terms,
  separator,
  className,
}: ExpressionProps) => {
  const safeTerms = Array.isArray(terms)
    ? terms.filter(isValidTerm)
    : [];

  if (safeTerms.length === 0) return null;

  const sep = safeSeparator(separator);

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-3xl font-bold",
        className
      )}
    >
      {safeTerms.map((term, index) => (
        <div key={index} className="flex items-center gap-3">
          {index > 0 && (
            // ✅ operator is white now
            <span className="text-white">
              {sep}
            </span>
          )}

          <span
            className={cn(
              typeof term.color === "string" && term.color
            )}
          >
            {term.value}
          </span>
        </div>
      ))}
    </div>
  );
};
