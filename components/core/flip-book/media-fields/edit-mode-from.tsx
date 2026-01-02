/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "../../box";
import { Caption, Title } from "../../typography";
import { Button } from "@/components/ui/button";
import { MediaFields } from "./media-fields";
import { Plus, Trash2 } from "lucide-react";
import { Control, UseFormHandleSubmit, useFieldArray } from "react-hook-form";
import { v4 as uuid } from "uuid";

type Props = {
  control: Control<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  onCancel: () => void;
};

export const EditModeFrom = ({
  control,
  handleSubmit,
  onSubmit,
  onCancel,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "pages",
  });

  return (
    <Box className="rounded-xl border bg-white p-6 space-y-10">
      <Box className="flex items-center justify-between border-b pb-4">
        <Title as="h3">Edit Story</Title>
        <Box className="flex gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Box>
      </Box>

      <section className="space-y-4">
        <Title as="h4">Cover Page</Title>
        <MediaFields prefix="cover" control={control} imageLabel="Cover Image" />
      </section>

      <section className="space-y-6">
        <Title as="h4">Story Pages</Title>

        {fields.map((field, index) => (
          <Box key={field.id} className="rounded-lg border bg-gray-50 p-5 space-y-4">
            <Box className="flex justify-between items-center">
              <Caption className="font-medium">
                Page {index + 2}
              </Caption>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500"
                onClick={() => remove(index)}
              >
                <Trash2 size={16} />
              </Button>
            </Box>

            <MediaFields prefix={`pages.${index}`} control={control} />
          </Box>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              id: uuid(),
              title: "",
              description: "",
              image: null,
              videoUrl: "",
              audioUrl: "",
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Page
        </Button>
      </section>

      <section className="space-y-4">
        <Title as="h4">End Page</Title>
        <MediaFields prefix="end" control={control} imageLabel="End Image" />
      </section>
    </Box>
  );
};
