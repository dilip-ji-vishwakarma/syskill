"use client";

import { Controller, Control } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type TextareaFieldProps = {
  name: string;
  control: Control;
  label?: string;
  placeholder?: string;
  rules?: object;
  className?: string;
  defaultValue?: string;
  rows?: number;
};

export const TextareaField = ({
  name,
  control,
  label,
  placeholder,
  rules,
  className,
  defaultValue = "",
  rows = 4,
}: TextareaFieldProps) => {
  return (
    <div className="space-y-1">
      {label && <Label htmlFor={name}>{label}</Label>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <>
            <Textarea
              {...field}
              value={field.value ?? defaultValue}
              placeholder={placeholder}
              rows={rows}
              className={cn(
                fieldState.error && "border-red-500",
                className
              )}
            />

            {fieldState.error && (
              <p className="text-xs text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
