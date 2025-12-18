"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

type PageMetaHeaderProps = {
  chapter?: string | number;
  grade?: string | number;
  chapterHref?: string;
  gradeHref?: string;
  className?: string;
};

export function PageMetaHeader({
  chapter = "N/A",
  grade = "N/A",
  chapterHref,
  gradeHref,
  className,
}: PageMetaHeaderProps) {
  return (
    <Breadcrumb className={cn("mb-5", className)}>
      <BreadcrumbList className="gap-3 text-xs font-medium">
        <BreadcrumbItem>
          {chapterHref ? (
            <BreadcrumbLink href={chapterHref}>
              <span className="rounded-full bg-primary_shade px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                Chapter {chapter}
              </span>
            </BreadcrumbLink>
          ) : (
            <span className="rounded-full bg-primary_shade px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
              Chapter {chapter}
            </span>
          )}
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          {gradeHref ? (
            <BreadcrumbLink
              href={gradeHref}
              className="text-[11px] uppercase tracking-[0.16em]"
            >
              {grade}
            </BreadcrumbLink>
          ) : (
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {grade}
            </span>
          )}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
