import { cn } from "@/lib/utils";

export function Paragraph({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "leading-7 text-foreground [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  );
}
