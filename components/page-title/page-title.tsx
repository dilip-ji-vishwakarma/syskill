"use client";
import { cn } from "@/lib/utils";

type MetaProps = {
  title?: unknown;
  subtitle?: unknown;
  titleColor?: unknown;
  subtitleColor?: unknown;
};

const safeText = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim().length > 0
    ? value
    : fallback;

const safeOptionalText = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0
    ? value
    : null;

const safeClass = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0
    ? value
    : undefined;

export const PageTitle = ({
  title,
  subtitle,
  titleColor,
  subtitleColor,
}: MetaProps) => {
  const safeTitle = safeText(title, "Past your title");
  const safeSubtitle = safeOptionalText(subtitle);

  const titleClass = safeClass(titleColor) ?? 
    "text-[30px] leading-tight font-semibold mb-1.5 text-slate-900 dark:text-slate-100";

  const subtitleClass = safeClass(subtitleColor) ??
    "text-[15px] text-slate-600 dark:text-slate-400";

  return (
    <section className="mb-5">
      <h1 className={cn(titleClass)}>
        {safeTitle}
      </h1>

      {safeSubtitle && (
        <p className={cn(subtitleClass)}>
          {safeSubtitle}
        </p>
      )}
    </section>
  );
};
