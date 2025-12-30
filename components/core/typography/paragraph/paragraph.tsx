import { cn } from "@/lib/utils";

export function Paragraph({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "leading-7 text-foreground",
        className
      )}
      {...props}
    />
  );
}
