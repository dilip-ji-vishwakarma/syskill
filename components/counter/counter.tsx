"use client";
import { cn } from "@/lib/utils";
import { useCounterMutations } from "./toolkit/hook/use-counter-mutations";

type CounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
};

const toNumber = (value: unknown, fallback: number) =>
  typeof value === "number" && !Number.isNaN(value) ? value : fallback;

export const Counter = ({
  initialValue = 1,
  min = 0,
  max = Infinity,
  step = 1,
  onChange,
  className,
}: CounterProps) => {
  const safeMin = Number.isFinite(min) ? min : 0;

  const safeMax =
    Number.isFinite(max) && max >= safeMin ? max : safeMin + 100;

  const safeInitial = toNumber(initialValue, safeMin);
  const safeStep = step > 0 ? step : 1;

  const {
    value,
    isMin,
    isMax,
    handleIncrement,
    handleDecrement,
  } = useCounterMutations({
    initialValue: safeInitial,
    min: safeMin,
    max: safeMax,
    step: safeStep,
    onChange,
  });

  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-full bg-secondary/10 px-7 py-2.5 shadow-soft",
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={isMin}
        className={cn(
          "h-8 w-8 rounded-full border bg-white text-secondary flex items-center justify-center",
          isMin && "opacity-50 cursor-not-allowed"
        )}
      >
        –
      </button>

      <div className="min-w-6 text-center text-base font-semibold text-default">
        {value}
      </div>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={isMax}
        className={cn(
          "h-8 w-8 rounded-full border bg-white text-secondary flex items-center justify-center",
          isMax && "opacity-50 cursor-not-allowed"
        )}
      >
        +
      </button>
    </div>
  );
};
