"use client";

import { useForm, useFieldArray } from "react-hook-form";
import type { FieldValues, Control } from "react-hook-form";
import { Box, InputField, InputFile, TextareaField, Title } from "@/components/core";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlipBooks } from "@/components/core/flip-book/flip-book";

type FormValues = {
  cover: {
    title: string;
    subtitle: string;
    image: File | null;
  };
  pages: {
    image: File | null;
    text: string;
  }[];
  end: {
    text: string;
    image: File | null;
  };
};

export const PageBase = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      cover: {
        title: "Riya and Robo",
        subtitle: "A Story About Friendship",
        image: null,
      },
      pages: [{ image: null, text: "" }],
      end: {
        text: "THE END",
        image: null,
      },
    },
  });

  const typedControl = control as unknown as Control<FieldValues>;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "pages",
  });

  const onSubmit = (data: FormValues) => {
    const flipBookPages = [
      {
        isCover: true,
        image: data.cover.image,
        title: data.cover.title,
        subtitle: data.cover.subtitle,
      },
      ...data.pages.map((page) => ({
        image: page.image,
        text: page.text,
      })),
      {
        isEnd: true,
        image: data.end.image,
        text: data.end.text,
      },
    ];

    console.log("✅ Final Flipbook JSON", flipBookPages);
  };

  return (
    <Box className="min-h-screen p-6">
      <Box className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm p-6">
        <Tabs defaultValue="edit">
          <Box className="flex items-center justify-between mb-6">
            <Title as="h2" className="text-xl font-semibold">
              Edit StoryBook
            </Title>

            <TabsList className="bg-transparent border border-gray-300 rounded">
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
          </Box>

          <TabsContent value="edit">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <section className="border rounded-md p-5 space-y-4">
                <Title as="h4">Cover Page</Title>

                <InputFile
                  name="cover.image"
                  control={typedControl}
                  label="Cover Image"
                />

                <InputField
                  name="cover.title"
                  control={typedControl}
                  label="Story Title"
                />

                <InputField
                  name="cover.subtitle"
                  control={typedControl}
                  label="Subtitle"
                />
              </section>

              <section className="space-y-5">
                <Title as="h4">Story Pages</Title>

                {fields.map((field, index) => (
                  <Box
                    key={field.id}
                    className="border rounded-md p-5 bg-white space-y-4"
                  >
                    <Box className="flex justify-between items-center">
                      <span className="text-sm font-semibold bg-gray-100 px-3 py-1 rounded">
                        Page {index + 1}
                      </span>

                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    </Box>

                    <InputFile
                      name={`pages.${index}.image`}
                      control={typedControl}
                      label="Page Image"
                    />

                    <TextareaField
                      name={`pages.${index}.text`}
                      control={typedControl}
                      label="Page Text"
                      placeholder="Write the story for this page…"
                    />
                  </Box>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => append({ image: null, text: "" })}
                >
                  ➕ Add New Page
                </Button>
              </section>
              <section className="border rounded-md p-5 space-y-4">
                <Title as="h4">End Page</Title>

                <InputFile
                  name="end.image"
                  control={typedControl}
                  label="End Page Image"
                />
                <TextareaField
                  name="end.text"
                  control={typedControl}
                  label="End Text"
                  placeholder="Write the story for this page…"
                />
              </section>

              <Box className="border-t pt-4 flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2271b1] hover:bg-[#135e96]"
                >
                  Save StoryBook
                </Button>
              </Box>
            </form>
          </TabsContent>

          <TabsContent value="preview">
            <FlipBooks />
          </TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
};
