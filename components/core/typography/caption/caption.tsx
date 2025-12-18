import { cn } from "@/lib/utils";

export function Caption({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
