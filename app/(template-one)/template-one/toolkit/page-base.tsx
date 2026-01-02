/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormValues, PageItem } from "@/types/types";
import { buildPageFromForm, mapPageToForm } from "@/components/core/flip-book/hook/helpers";
import { EditModeFrom } from "@/components/core/flip-book/media-fields";

type Props = {
  data: PageItem[];
  onSave: (pages: PageItem[]) => void;
  onCancel: () => void;
};

export const PageBase = ({ data, onSave, onCancel }: Props) => {
  const form = useForm<FormValues>();

  useEffect(() => {
    if (!data?.length) return;

    form.reset({
      cover: mapPageToForm(data[0]),
      pages: data.slice(1, -1).map(mapPageToForm),
      end: mapPageToForm(data[data.length - 1]),
    });
  }, [data]);

  const handleSubmit = (values: FormValues) => {
    const payload: PageItem[] = [
      buildPageFromForm(values.cover),
      ...values.pages.map(buildPageFromForm),
      buildPageFromForm(values.end),
    ];

    onSave(payload);
    console.log(payload, "payload")
  };

  return (
    <EditModeFrom
      control={form.control}
      handleSubmit={form.handleSubmit}
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
