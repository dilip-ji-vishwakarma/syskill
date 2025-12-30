import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ListItem } from "./list-item";

type ListType =
  | "disc"
  | "decimal"
  | "none"
  | "circle"
  | "square"
  | "upper-alpha"
  | "lower-alpha"
  | "upper-roman"
  | "lower-roman";

type ListPosition = "inside" | "outside";

type Gap =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type ListProps = {
  children: ReactNode;
  className?: string;
  type?: ListType;
  position?: ListPosition;
  gap?: Gap;
};

type ListTypeMap = Record<ListType, string>;
type PositionMap = Record<ListPosition, string>;
type GapMap = Record<Gap, string>;

export const List = ({
  children,
  className,
  type = "disc",
  position = "outside",
  gap = 2,
}: ListProps) => {
  const LIST_TYPE: ListTypeMap = {
    disc: "list-disc",
    decimal: "list-decimal",
    none: "list-none",
    circle: "list-[circle]",
    square: "list-[square]",
    "upper-alpha": "list-[upper-alpha]",
    "lower-alpha": "list-[lower-alpha]",
    "upper-roman": "list-[upper-roman]",
    "lower-roman": "list-[lower-roman]",
  };

  const POSITION: PositionMap = {
    inside: "list-inside",
    outside: "list-outside",
  };

  const GAP: GapMap = {
    0: "space-y-0",
    1: "space-y-1",
    2: "space-y-2",
    3: "space-y-3",
    4: "space-y-4",
    5: "space-y-5",
    6: "space-y-6",
    7: "space-y-7",
    8: "space-y-8",
    9: "space-y-9",
    10: "space-y-10",
  };

  return (
    <ul
      className={cn(
        LIST_TYPE[type],
        POSITION[position],
        GAP[gap],
        className
      )}
    >
      {children}
    </ul>
  );
};

List.Item = ListItem;
