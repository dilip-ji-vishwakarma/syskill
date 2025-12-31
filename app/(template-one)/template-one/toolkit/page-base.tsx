"use client";

import { useForm, useFieldArray } from "react-hook-form";
import type { Control, FieldValues } from "react-hook-form";
import {
  Box,
  InputField,
  InputFile,
  TextareaField,
  Title,
} from "@/components/core";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

type Media = {
  url: string;
  start?: number;
  end?: number;
};

type PageItem = {
  id: number;
  isStart?: boolean;
  isCover?: boolean;
  image?: string;
  title?: string;
  description?: string;
  video?: Media;
  audio?: Media;
};

type Props = {
  data: PageItem[];
  onSave: (data: PageItem[]) => void;
  onCancel: () => void;
};

type FormValues = {
  cover: {
    title: string;
    description: string;
    image: File | null;
    videoUrl: string;
    videoStart?: number;
    videoEnd?: number;
    audioUrl: string;
    audioStart?: number;
    audioEnd?: number;
  };
  pages: {
    title: string;
    description: string;
    image: File | null;
    videoUrl: string;
    videoStart?: number;
    videoEnd?: number;
    audioUrl: string;
    audioStart?: number;
    audioEnd?: number;
  }[];
  end: {
    title: string;
    description: string;
    image: File | null;
    videoUrl: string;
    videoStart?: number;
    videoEnd?: number;
    audioUrl: string;
    audioStart?: number;
    audioEnd?: number;
  };
};

export const PageBase = ({ data, onSave, onCancel }: Props) => {
  const cover = data[0];
  const end = data[data.length - 1];
  const middlePages = data.slice(1, -1);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      cover: {
        title: cover?.title ?? "",
        description: cover?.description ?? "",
        image: null,
        videoUrl: cover?.video?.url ?? "",
        videoStart: cover?.video?.start,
        videoEnd: cover?.video?.end,
        audioUrl: cover?.audio?.url ?? "",
        audioStart: cover?.audio?.start,
        audioEnd: cover?.audio?.end,
      },

      pages: middlePages.map((p) => ({
        title: p.title ?? "",
        description: p.description ?? "",
        image: null,
        videoUrl: p.video?.url ?? "",
        videoStart: p.video?.start,
        videoEnd: p.video?.end,
        audioUrl: p.audio?.url ?? "",
        audioStart: p.audio?.start,
        audioEnd: p.audio?.end,
      })),

      end: {
        title: end?.title ?? "",
        description: end?.description ?? "",
        image: null,
        videoUrl: end?.video?.url ?? "",
        videoStart: end?.video?.start,
        videoEnd: end?.video?.end,
        audioUrl: end?.audio?.url ?? "",
        audioStart: end?.audio?.start,
        audioEnd: end?.audio?.end,
      },
    },
  });

  const typedControl = control as unknown as Control<FieldValues>;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "pages",
  });

  const onSubmit = (values: FormValues) => {
    const result: PageItem[] = [];

    // COVER
    result.push({
      ...cover,
      title: values.cover.title,
      description: values.cover.description,
      video: {
        url: values.cover.videoUrl,
        start: values.cover.videoStart,
        end: values.cover.videoEnd,
      },
      audio: {
        url: values.cover.audioUrl,
        start: values.cover.audioStart,
        end: values.cover.audioEnd,
      },
    });

    // MIDDLE PAGES
    values.pages.forEach((p, index) => {
      result.push({
        id: middlePages[index]?.id ?? Date.now() + index,
        title: p.title,
        description: p.description,
        image: middlePages[index]?.image,
        video: {
          url: p.videoUrl,
          start: p.videoStart,
          end: p.videoEnd,
        },
        audio: {
          url: p.audioUrl,
          start: p.audioStart,
          end: p.audioEnd,
        },
      });
    });

    // END
    result.push({
      ...end,
      title: values.end.title,
      description: values.end.description,
      video: {
        url: values.end.videoUrl,
        start: values.end.videoStart,
        end: values.end.videoEnd,
      },
      audio: {
        url: values.end.audioUrl,
        start: values.end.audioStart,
        end: values.end.audioEnd,
      },
    });

    onSave(result);
  };

  return (
    <Box className="rounded-xl border bg-white p-6 space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b pb-4">
        <Title as="h3">Edit Story</Title>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </div>
      </div>

      {/* COVER */}
      <section className="space-y-4">
        <Title as="h4">Cover Page</Title>

        <InputField name="cover.title" control={typedControl} label="Title" />

        <TextareaField
          name="cover.description"
          control={typedControl}
          label="Description"
        />

        <InputFile
          name="cover.image"
          control={typedControl}
          label="Cover Image"
        />

        <div className="grid grid-cols-3 gap-3">
          <InputField name="cover.videoUrl" control={typedControl} label="Video URL" />
          <InputField name="cover.videoStart" control={typedControl} label="Start" type="number" />
          <InputField name="cover.videoEnd" control={typedControl} label="End" type="number" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <InputField name="cover.audioUrl" control={typedControl} label="Audio URL" />
          <InputField name="cover.audioStart" control={typedControl} label="Start" type="number" />
          <InputField name="cover.audioEnd" control={typedControl} label="End" type="number" />
        </div>
      </section>

      {/* MIDDLE PAGES */}
      <section className="space-y-6">
        <Title as="h4">Story Pages</Title>

        {fields.map((field, index) => (
          <Box key={field.id} className="rounded-lg border p-5 space-y-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="font-medium">Page {index + 2}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500"
                onClick={() => remove(index)}
              >
                <Trash2 size={16} />
              </Button>
            </div>

            <InputField name={`pages.${index}.title`} control={typedControl} label="Title" />
            <TextareaField name={`pages.${index}.description`} control={typedControl} label="Description" />

            <InputFile name={`pages.${index}.image`} control={typedControl} label="Image" />

            <div className="grid grid-cols-3 gap-3">
              <InputField name={`pages.${index}.videoUrl`} control={typedControl} label="Video URL" />
              <InputField name={`pages.${index}.videoStart`} control={typedControl} label="Start" type="number" />
              <InputField name={`pages.${index}.videoEnd`} control={typedControl} label="End" type="number" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <InputField name={`pages.${index}.audioUrl`} control={typedControl} label="Audio URL" />
              <InputField name={`pages.${index}.audioStart`} control={typedControl} label="Start" type="number" />
              <InputField name={`pages.${index}.audioEnd`} control={typedControl} label="End" type="number" />
            </div>
          </Box>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              title: "",
              description: "",
              image: null,
              videoUrl: "",
              videoStart: undefined,
              videoEnd: undefined,
              audioUrl: "",
              audioStart: undefined,
              audioEnd: undefined,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Page
        </Button>
      </section>

      {/* END */}
      <section className="space-y-4">
        <Title as="h4">End Page</Title>

        <InputField name="end.title" control={typedControl} label="Title" />

        <TextareaField name="end.description" control={typedControl} label="Description" />

        <InputFile name="end.image" control={typedControl} label="End Image" />

        <div className="grid grid-cols-3 gap-3">
          <InputField name="end.videoUrl" control={typedControl} label="Video URL" />
          <InputField name="end.videoStart" control={typedControl} label="Start" type="number" />
          <InputField name="end.videoEnd" control={typedControl} label="End" type="number" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <InputField name="end.audioUrl" control={typedControl} label="Audio URL" />
          <InputField name="end.audioStart" control={typedControl} label="Start" type="number" />
          <InputField name="end.audioEnd" control={typedControl} label="End" type="number" />
        </div>
      </section>
    </Box>
  );
};
