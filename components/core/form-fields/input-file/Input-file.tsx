"use client";

import { Controller, Control, FieldValues, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

type InputFileProps = {
  name: string;
  control: Control<FieldValues>;
  label?: string;
  required?: boolean;
};

export const InputFile = ({
  name,
  control,
  label,
  required,
}: InputFileProps) => {
  const file = useWatch({
    control,
    name,
  }) as File | null;

  const preview = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required || false,
        validate: {
          fileType: (file: File | null) =>
            !file ||
            ["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
            "Only JPG, PNG or WEBP files are allowed",

          fileSize: (file: File | null) =>
            !file || file.size <= 5 * 1024 * 1024 || "Max size is 5MB",
        },
      }}
      render={({ field, fieldState }) => (
        <div className="space-y-2">
          {label && (
            <Label className="text-sm font-medium text-slate-900">
              {label}
            </Label>
          )}

          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className={cn(
              fieldState.error &&
                "border-red-500 focus-visible:ring-red-500"
            )}
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              field.onChange(file);
            }}
          />

          {/* ERROR MESSAGE */}
          {fieldState.error && (
            <p className="text-xs text-red-600">
              {fieldState.error.message}
            </p>
          )}

          {/* PREVIEW */}
          {preview && (
            <Image
              src={preview}
              alt="Preview"
              width={120}
              height={120}
              className="rounded border"
              onLoad={() => URL.revokeObjectURL(preview)}
            />
          )}
        </div>
      )}
    />
  );
};
