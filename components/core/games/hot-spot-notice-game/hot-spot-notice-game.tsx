/* eslint-disable @next/next/no-img-element */
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Paragraph, Title } from "../../typography";
import { useHotspotMutation } from "./hook/use-hotspot-mutation";

type Hotspot = {
  id: string;
  top: string; 
  left: string;
};

type FeedbackMap = Record<string, string>;

type HotspotNoticeGameProps = {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  hotspots: Hotspot[];
  feedbackText: FeedbackMap;
};

export const HotspotNoticeGame = ({
  title,
  description,
  imageSrc,
  imageAlt = "scene",
  hotspots,
  feedbackText,
}: HotspotNoticeGameProps) => {
  const { showChoices, feedback, handleHotspotClick, handleAnswer } =
    useHotspotMutation({ feedbackText });

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Title as="h2">{title}</Title>
        {description && (
          <Paragraph className="text-muted-foreground">{description}</Paragraph>
        )}
      </div>
      <div className="relative mx-auto w-full max-w-3xl">
        <img src={imageSrc} alt={imageAlt} className="w-full rounded-lg" />
        {hotspots.map((spot) => (
          <Button
            key={spot.id}
            onClick={() => handleHotspotClick(spot.id)}
            className={cn(
              "absolute h-6 w-6 rounded-full border-2 border-primary",
              "bg-primary/20 hover:bg-primary/40 transition"
            )}
            style={{ top: spot.top, left: spot.left }}
            aria-label={`hotspot-${spot.id}`}
          />
        ))}
      </div>

      {showChoices && (
        <Card className="mx-auto max-w-md p-4 text-center space-y-3">
          <Paragraph className="font-medium">
            Who will notice this better?
          </Paragraph>
          <div className="flex justify-center gap-4">
            <Button onClick={handleAnswer}>Human</Button>
            <Button onClick={handleAnswer} variant="secondary">
              Robot
            </Button>
          </div>
        </Card>
      )}

      {feedback && (
        <Card className="mx-auto max-w-2xl p-4">
          <Paragraph className="text-center">{feedback}</Paragraph>
        </Card>
      )}
    </div>
  );
};
