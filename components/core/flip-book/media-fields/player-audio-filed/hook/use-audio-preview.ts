import { useEffect, useMemo, useRef } from "react";

type UseAudioPreviewProps = {
  audioFile?: File | null;
  start?: number;
  end?: number;
};

export const useAudioPreview = ({
  audioFile,
  start = 0,
  end,
}: UseAudioPreviewProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const previewUrl = useMemo(() => {
    if (!(audioFile instanceof File)) return null;
    return URL.createObjectURL(audioFile);
  }, [audioFile]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handlePlay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = start;
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || end === undefined) return;
    if (audioRef.current.currentTime >= end) {
      audioRef.current.pause();
    }
  };

  return {
    audioRef,
    previewUrl,
    handlePlay,
    handleTimeUpdate,
  };
};
