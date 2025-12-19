"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCounterMutations } from "./toolkit/hook/use-counter-mutations";

type CounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
};

export function Counter({
  initialValue = 1,
  min = 0,
  max = Infinity,
  step = 1,
  onChange,
  className,
}: CounterProps) {
  const safeMin = Number.isFinite(min) ? min : 0;
  const safeMax =
    Number.isFinite(max) && max >= safeMin ? max : safeMin + 100;
  const safeStep = step > 0 ? step : 1;

  const {
    value,
    isMin,
    isMax,
    handleIncrement,
    handleDecrement,
  } = useCounterMutations({
    initialValue,
    min: safeMin,
    max: safeMax,
    step: safeStep,
    onChange,
  });

  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-full bg-background px-6 py-2",
        className
      )}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={isMin}
        aria-label="Decrease value"
        className="rounded-full bg-secondary-foreground dark:bg-secondary"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <span className="min-w-6 text-center text-base font-semibold text-foreground">
        {value}
      </span>

      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={isMax}
        aria-label="Increase value"
        className="rounded-full bg-secondary-foreground dark:bg-secondary"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
