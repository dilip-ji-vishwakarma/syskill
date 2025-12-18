"use client";
import { cn } from "@/lib/utils";

type MetaProps = {
  chapter?: unknown;
  grade?: unknown;
  bgColor?: unknown;
  textColor?: unknown;
};

const safeText = (value: unknown, fallback: string) =>
  typeof value === "string" || typeof value === "number"
    ? String(value)
    : fallback;

const safeClass = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0
    ? value
    : undefined;

export const PageMetaHeader = ({
  chapter,
  grade,
  bgColor,
  textColor,
}: MetaProps) => {
  const safeChapter = safeText(chapter, "N/A");
  const safeGrade = safeText(grade, "N/A");

  const safeBg = safeClass(bgColor) ?? "bg-primary_shade dark:bg-slate-800";
  const safeTextColor =
    safeClass(textColor) ?? "text-primary dark:text-slate-300";

  const outerTextClass = textColor
    ? undefined
    : "text-slate-500 dark:text-slate-400";

  return (
    <div
      className={cn(
        "mb-5 flex items-center gap-3 text-xs font-medium",
        outerTextClass
      )}
    >
      <span
        className={cn(
          "rounded-full px-3 py-[6px] text-[10px] uppercase tracking-[0.18em]",
          safeBg,
          safeTextColor
        )}
      >
        Chapter {safeChapter}
      </span>

      <span className="text-[11px] uppercase tracking-[0.16em]">
        {safeGrade}
      </span>
    </div>
  );
};
