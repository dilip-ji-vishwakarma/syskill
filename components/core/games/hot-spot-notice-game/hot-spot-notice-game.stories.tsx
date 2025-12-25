import type { Meta, StoryObj } from "@storybook/react";
import { HotspotNoticeGame } from "./hot-spot-notice-game";

const data = {
  hotspots: [
    { id: "crying", top: "76%", left: "19%" },
    { id: "ball", top: "83%", left: "38%" },
    { id: "whistle", top: "70%", left: "58%" },
  ],
  feedbackText: {
    crying: "Humans can feel emotions. Robots cannot feel sadness.",
    ball: "Robots can see movement using cameras.",
    whistle: "Robots can hear sounds using microphones.",
  },
};

const meta: Meta<typeof HotspotNoticeGame> = {
  title: "Games/HotspotNoticeGame",
  component: HotspotNoticeGame,
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
      description: "Instruction shown below the title",
    },
    imageSrc: {
      control: "text",
      description: "Background image for the scene",
    },
    imageAlt: {
      control: "text",
    },

    hotspots: {
      control: false,
      description: "Hotspot positions (JSON driven)",
    },
    feedbackText: {
      control: false,
      description: "Feedback shown after answer (JSON driven)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HotspotNoticeGame>;

export const Default: Story = {
  args: {
    title: "Game 2: Who Will Notice?",
    description: "Tap a circle in the picture.",
    imageSrc: "/images/hot-spot.png", 
    ...data,
  },
};
