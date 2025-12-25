"use client";

import {
  Controller,
  Control,
  FieldValues,
  useWatch,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useMemo } from "react";

type InputFileProps = {
  name: string;
  control: Control<FieldValues>;
  label?: string;
};

export const InputFile = ({ name, control, label }: InputFileProps) => {
  const file = useWatch({
    control,
    name,
  }) as File | null;

  const preview = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  return (
    <div className="space-y-2">
      {label && (
        <Label
          htmlFor={name}
          className="text-slate-900 text-sm font-medium block"
        >
          {label}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0] ?? null;
              if (!selectedFile) return;

              const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp",
              ];

              if (!allowedTypes.includes(selectedFile.type)) {
                alert("Only JPG, PNG, and WEBP files are allowed.");
                return;
              }

              onChange(selectedFile);
            }}
          />
        )}
      />

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
  );
};
