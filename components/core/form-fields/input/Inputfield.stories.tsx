/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "./input-field";

const meta: Meta<typeof InputField> = {
  title: "Form/InputField",
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

const FormWrapper = (args: any) => {
  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="max-w-sm space-y-4">
        <InputField {...args} control={methods.control} />
      </form>
    </FormProvider>
  );
};


export const Default: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "username",
    label: "Username",
    placeholder: "Enter username",
  },
};

export const WithValidation: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "email",
    label: "Email",
    placeholder: "Enter email",
    type: "email",
    rules: {
      required: "Email is required",
    },
  },
};

export const WithoutLabel: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "username",
    placeholder: "No label input",
  },
};

export const WithDefaultValue: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    name: "username",
    label: "Username",
    defaultValue: "Dilip",
  },
};
