/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import { InputField, TextareaField, InputFile } from "@/components/core";

type Props = {
  prefix: string;
  control: Control<any>;
  imageLabel?: string;
  required?: boolean;
};

export const MediaFields = ({ prefix, control, imageLabel, required }: Props) => {
  return (
    <div className="space-y-4">
      <InputField name={`${prefix}.title`} control={control} label="Title" />

      <TextareaField
        name={`${prefix}.description`}
        control={control}
        label="Description"
      />

      <InputFile
        name={`${prefix}.image`}
        control={control}
        label={imageLabel ?? "Image"}
        required={required}
      />

      <div className="grid grid-cols-3 gap-3">
        <InputField name={`${prefix}.videoUrl`} control={control} label="Video URL" />
        <InputField name={`${prefix}.videoStart`} control={control} label="Start" type="number" />
        <InputField name={`${prefix}.videoEnd`} control={control} label="End" type="number" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <InputField name={`${prefix}.audioUrl`} control={control} label="Audio URL" />
        <InputField name={`${prefix}.audioStart`} control={control} label="Start" type="number" />
        <InputField name={`${prefix}.audioEnd`} control={control} label="End" type="number" />
      </div>
    </div>
  );
};
