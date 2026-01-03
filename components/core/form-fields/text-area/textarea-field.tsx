/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Control, Controller, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type TextareaFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  rules?: object;
  className?: string;
  defaultValue?: string;
  rows?: number;
  required?: boolean;
  control: Control<any>;
};

export const TextareaField = ({
  name,
  label,
  placeholder,
  required = false,
  className,
  defaultValue = "",
  rows = 4,
  control
}: TextareaFieldProps) => {
  const {
    formState: { errors },
  } = useForm();
  return (
    <div className="space-y-1">
      {label && <Label htmlFor={name}>{label}</Label>}

      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <>
            <Textarea
              {...field}
              value={field.value ?? defaultValue}
              placeholder={placeholder}
              rows={rows}
              className={cn(fieldState.error && "border-red-500", className)}
            />
            {errors && (
              <p className="text-xs text-red-500">{`Field is required`}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
