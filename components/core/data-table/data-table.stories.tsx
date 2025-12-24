import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./data-table";

const meta: Meta<typeof DataTable> = {
  title: "Table/DataTable",
  component: DataTable,
  argTypes: {
    data: {
      control: "object", // 👈 JSON editor enable
      description: "Paste JSON array to update table dynamically",
    },
    caption: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable>;

/* -------------------- Mock Data -------------------- */

const sampleData = [
  {
    id: 1,
    title: "First Story",
    author: "Dilip",
    thumbnail: "https://picsum.photos/200/300",
    status: "Published",
  },
  {
    id: 2,
    title: "Second Story",
    author: "Admin",
    thumbnail: "https://picsum.photos/200/301",
    status: "Draft",
  },
];

/* -------------------- Stories -------------------- */

export const Default: Story = {
  args: {
    caption: "Stories list",
    data: sampleData,
  },
};

export const EditableFromJSON: Story = {
  name: "Live JSON Controlled",
  args: {
    caption: "Edit data from Storybook controls",
    data: [
      {
        id: 101,
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://picsum.photos/200/302",
        role: "Admin",
      },
    ],
  },
};

export const EmptyState: Story = {
  args: {
    caption: "No records available",
    data: [],
  },
};

export const WithDeleteAction: Story = {
  args: {
    caption: "Deletable Table",
    data: sampleData,
    onDelete: async (row, index) => {
      console.log("Delete clicked", row, index);
      alert(`Deleted row ${index + 1}`);
    },
  },
};
