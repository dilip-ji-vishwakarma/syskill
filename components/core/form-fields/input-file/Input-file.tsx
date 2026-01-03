/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Controller,
  Control,
  useWatch,
} from "react-hook-form";

type FileProps = {
  name: string;
  label?: string;
  className?: string;
  required?: boolean;
  control: Control<any>;
};

export const InputFile = ({
  label,
  required,
  name,
  className,
  control,
}: FileProps) => {
  const file = useWatch({
    control,
    name,
  }) as File | null;

  const preview = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={name}>
          {label} {required && "*"}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field, fieldState }) => (
          <>
            <Input
              type="file"
              ref={field.ref}
              className={cn(
                fieldState.error && "border-red-500",
                className
              )}
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                field.onChange(file);
              }}
            />

            {fieldState.error && (
              <span className="text-red-500 text-sm">
                File is required
              </span>
            )}
          </>
        )}
      />

      {preview && file?.type.startsWith("image/") && (
        <div className="mt-2">
          <img
            src={preview}
            alt="Preview"
            className="w-32 rounded-md object-cover border"
          />
        </div>
      )}
    </div>
  );
};
