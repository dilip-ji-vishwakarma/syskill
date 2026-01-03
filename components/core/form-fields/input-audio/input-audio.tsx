/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputAudioProps = {
  name: string;
  control: Control<any>;
  label?: string;
};

export const InputAudio = ({
  name,
  control,
  label,
}: InputAudioProps) => {
  return (
    <div className="space-y-1">
      {label && <Label>{label}</Label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type="file"
            accept="audio/*"
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              field.onChange(file); // ✅ only File goes to RHF
            }}
          />
        )}
      />
    </div>
  );
};
