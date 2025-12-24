/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { TextareaField } from "./textarea-field";

const meta: Meta<typeof TextareaField> = {
  title: "Form/TextareaField",
  component: TextareaField,
};

export default meta;

type Story = StoryObj<typeof TextareaField>;

/**
 * Wrapper is required because TextareaField uses react-hook-form Controller
 */
const FormWrapper = (args: any) => {
  const methods = useForm({
    defaultValues: {
      description: "",
      notes: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="max-w-md space-y-4">
        <TextareaField {...args} control={methods.control} />
      </form>
    </FormProvider>
  );
};

/* -------------------- Stories -------------------- */

export const Default: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "description",
    label: "Description",
    placeholder: "Write something...",
  },
};

export const WithValidation: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "notes",
    label: "Notes",
    placeholder: "Required field",
    rules: {
      required: "Notes are required",
    },
  },
};

export const WithoutLabel: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "description",
    placeholder: "Textarea without label",
  },
};

export const WithDefaultValue: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "description",
    label: "About You",
    defaultValue: "This is default text...",
  },
};

export const CustomRows: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "description",
    label: "Long Content",
    placeholder: "More rows textarea",
    rows: 8,
  },
};
