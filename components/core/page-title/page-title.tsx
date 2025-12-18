"use client";
import { cn } from "@/lib/utils";
import { Paragraph, Title } from "../typography";

type PageTitleProps = {
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function PageTitle({
  title = "Paste your title",
  subtitle,
  titleClassName,
  subtitleClassName,
}: PageTitleProps) {
  return (
    <section className="mb-6 space-y-1">
      <Title
        as="h1"
        className={cn(
          titleClassName
        )}
      >
        {title}
      </Title>

      {subtitle && (
        <Paragraph
          className={cn(
            subtitleClassName
          )}
        >
          {subtitle}
        </Paragraph>
      )}
    </section>
  );
}
