/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Control, Controller, useForm } from "react-hook-form";

type InputFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  control: Control<any>;
};

export const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
  className,
  defaultValue = "",
  required = false,
  control,
}: InputFieldProps) => {
  const {
    formState: { errors },
  } = useForm();
  return (
    <div>
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
            <Input
              {...field}
              value={field.value ?? defaultValue}
              type={type}
              placeholder={placeholder}
              className={cn(fieldState.error && "border-red-500", className)}
            />

            <div>
              {errors.name && (
                <span className="text-red-500 text-sm">Please Enter Name</span>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
};
