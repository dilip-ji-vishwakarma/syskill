"use client";

import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type InputFieldProps = {
  name: string;
  control: Control;
  label?: string;
  placeholder?: string;
  type?: string;
  rules?: object;
  className?: string;
  defaultValue?: string;
};

export const InputField = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
  rules,
  className,
  defaultValue = "",
}: InputFieldProps) => {
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
            <Input
              {...field}
              value={field.value ?? defaultValue}
              type={type}
              placeholder={placeholder}
              className={cn(fieldState.error && "border-red-500", className)}
            />

            {fieldState.error && (
              <p className="text-xs text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
