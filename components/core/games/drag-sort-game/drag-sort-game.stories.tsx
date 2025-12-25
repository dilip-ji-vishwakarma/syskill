import type { Meta, StoryObj } from "@storybook/react";
import { DragSortGame } from "./drag-sort-game";

const data = {
  items: [
    { label: "Eye", type: "human" },
    { label: "Ear", type: "human" },
    { label: "Nose", type: "human" },
    { label: "Tongue", type: "human" },
    { label: "Skin", type: "human" },
    { label: "Camera", type: "machine" },
    { label: "Microphone", type: "machine" },
    { label: "Touch Screen", type: "machine" },
    { label: "Motion Sensor", type: "machine" },
    { label: "Sound Sensor", type: "machine" },
  ],
  buckets: [
    { title: "Human Senses", accept: "human" },
    { title: "Machine Sensors", accept: "machine" },
  ],
};

const meta: Meta<typeof DragSortGame> = {
  title: "Games/DragSortGame",
  component: DragSortGame,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Game title",
    },
    description: {
      control: "text",
      description: "Short instruction shown below the title",
    },

    items: {
      control: false,
      description: "Draggable items (JSON driven)",
    },
    buckets: {
      control: false,
      description: "Drop zones (JSON driven)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DragSortGame>;

export const SenseOrSensor: Story = {
  args: {
    title: "Game 1: Sense or Sensor?",
    description: "Drag each item to the correct group.",
    ...data,
  },
};
