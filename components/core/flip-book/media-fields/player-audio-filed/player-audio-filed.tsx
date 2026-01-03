"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAudioPreview } from "./hook/use-audio-preview";

type Props = {
  audioFile?: File | null;
  start?: number;
  end?: number;
};

export const PlayerAudioPreview = ({
  audioFile,
  start,
  end,
}: Props) => {
  const { audioRef, previewUrl, handlePlay, handleTimeUpdate } =
    useAudioPreview({
      audioFile,
      start,
      end,
    });

  if (!previewUrl) return null;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="audio-preview">
        <AccordionTrigger>Preview</AccordionTrigger>
        <AccordionContent>
          <audio
            ref={audioRef}
            src={previewUrl}
            controls
            className="w-full"
            onPlay={handlePlay}
            onTimeUpdate={handleTimeUpdate}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
