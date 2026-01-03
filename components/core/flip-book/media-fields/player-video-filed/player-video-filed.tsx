"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useVideoPreview } from "./hook/use-video-preview";

type Props = {
  url?: string;
  start?: number;
  end?: number;
};

export const PlayerVideoPreview = ({ url, start, end }: Props) => {
  const { embedUrl } = useVideoPreview({ url, start, end });

  if (!embedUrl) return null;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="video-preview">
        <AccordionTrigger>Preview</AccordionTrigger>
        <AccordionContent>
          <div className="max-w-full overflow-hidden rounded-lg border">
            <iframe
              key={`${url}-${start}-${end}`}
              src={embedUrl}
              className="h-[500px] w-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
