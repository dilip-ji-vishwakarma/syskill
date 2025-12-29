import { GenericObjectType } from "@/types/shared-types";
import React from "react";

export const usePlayerMutation = ({
  onPlayChange,
  autoPlay,
}: GenericObjectType) => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      onPlayChange?.(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        onPlayChange?.(true);
      } catch {}
    }
  };

  React.useEffect(() => {
    if (!autoPlay || !audioRef.current) return;

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  }, [autoPlay]);
  return { toggle, isPlaying, audioRef, setIsPlaying };
};
