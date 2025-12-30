import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ListItemProps = {
  children: ReactNode;
  className?: string;
  marker?: "default" | "none";
};

type MarkerMap = {
  default: string;
  none: string;
};

export const ListItem = ({
  children,
  className,
  marker = "default",
}: ListItemProps) => {
  const MARKER: MarkerMap = {
    default: "",
    none: "list-none",
  };

  return (
    <li
      className={cn(
        "text-sm leading-relaxed text-foreground",
        MARKER[marker],
        className
      )}
    >
      {children}
    </li>
  );
};
