"use client";

import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { Box } from "../box";
import { Button } from "@/components/ui/button";
import { usePlayerMutation } from "./hook/use-player-mutation";
import { GenericObjectType } from "@/types/shared-types";

export const AudioPlayer = ({
  src,
  className,
  autoPlay = false,
  onPlayChange,
}: GenericObjectType) => {
  const { toggle, isPlaying, audioRef, setIsPlaying } = usePlayerMutation({
    onPlayChange,
    autoPlay,
  });

  return (
    <Box className={cn("flex items-center justify-center", className)}>
      <Button
        onClick={toggle}
        className="flex h-14 w-14 items-center justify-center rounded-full border-4 bg-warning transition hover:scale-105"
        aria-label="Play or pause audio"
      >
        {isPlaying ? (
          <Pause className="h-7 w-7" />
        ) : (
          <Play className="h-7 w-7" />
        )}
      </Button>

      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onEnded={() => {
          setIsPlaying(false);
          onPlayChange?.(false);
        }}
      />
    </Box>
  );
};
