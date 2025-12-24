/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { InputField, TextareaField } from "@/components/core";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export const PageBase = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange", // ✅ validation live
  });

  const onSubmit = (data: any) => {
    console.log("Form Data 👉", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        name="whyOnBoard"
        control={control}
        label="Why Onboard?"
        placeholder="Enter reason"
        rules={{ required: "This field is required" }}
      />

      <InputField
        name="email"
        control={control}
        label="Email"
        type="email"
        placeholder="Enter email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            message: "Invalid email format",
          },
        }}
      />

      <TextareaField
        name="description"
        control={control}
        label="Description"
        placeholder="Enter description"
        rules={{
          required: "Description is required",
          minLength: {
            value: 10,
            message: "Minimum 10 characters required",
          },
        }}
      />

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};
