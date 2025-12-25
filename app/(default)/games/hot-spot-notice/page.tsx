import { HotspotNoticeGame } from "@/components/core";


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

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <HotspotNoticeGame
        title="Game 2: Who Will Notice?"
        description="Tap a circle in the picture."
        imageSrc="/images/hot-spot.png"
        hotspots={data.hotspots}
        feedbackText={data.feedbackText}
      />
    </div>
  );
}
