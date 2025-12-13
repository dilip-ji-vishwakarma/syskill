import React from "react";
import { cn } from "@/lib/utils";

type VariableCardProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export const VariableCard = ({
  icon,
  title = "Variable",
  className,
  children,
}: VariableCardProps) => {
  const displayTitle = title || "Variable";

  return (
    <div
      className={cn(
        "inline-flex flex-col items-center gap-3 rounded-3xl bg-white/70 px-6 py-5",
        className
      )}
    >
      {icon && (
        <div className="h-12 w-12 flex items-center justify-center">
          {icon}
        </div>
      )}

      <p className="text-sm font-semibold text-slate-800 text-center">
        {displayTitle}
      </p>
      {children && children}
    </div>
  );
};
