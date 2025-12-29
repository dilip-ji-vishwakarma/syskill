import { Box, DragSortGame } from "@/components/core";

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

const Page = () => {
  return (
    <Box className="max-w-5xl mx-auto p-6">
      <DragSortGame
        title="Game 1: Sense or Sensor?"
        description="Drag each item to the correct group."
        items={data.items}
        buckets={data.buckets}
      />
    </Box>
  );
};

export default Page;
