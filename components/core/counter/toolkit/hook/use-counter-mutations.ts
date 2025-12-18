"use client";
import { useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

type UseCounterProps = {
  initialValue: number;
  min: number;
  max: number;
  step: number;
  onChange?: (value: number) => void;
};

export const useCounterMutations = ({
  initialValue,
  min,
  max,
  step,
  onChange,
}: UseCounterProps) => {
  const [value, setValue] = useState(() =>
    clamp(initialValue, min, max)
  );

  const update = (next: number) => {
    const clamped = clamp(next, min, max);
    if (clamped === value) return;

    setValue(clamped);
    onChange?.(clamped);
  };

  return {
    value,
    isMin: value <= min,
    isMax: value >= max,
    handleIncrement: () => update(value + step),
    handleDecrement: () => update(value - step),
  };
};
