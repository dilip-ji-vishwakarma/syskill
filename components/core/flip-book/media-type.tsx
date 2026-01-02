import React from "react";
import { Box } from "../box";
import { Button } from "@/components/ui/button";

type ActiveMedia = {
  type: "video" | "audio";
  url: string;
  start?: number;
  end?: number;
};

type MediaType = "video" | "audio" | null;

type MediaTypeProps = {
  activeMedia: ActiveMedia | null;
  ytType: MediaType;
  setActiveMedia: React.Dispatch<React.SetStateAction<ActiveMedia | null>>;
  setYtType: React.Dispatch<React.SetStateAction<MediaType>>;
  getYoutubeEmbedUrl: (url: string, start?: number, end?: number) => string;
};

export const MediaType = ({
  activeMedia,
  ytType,
  setActiveMedia,
  setYtType,
  getYoutubeEmbedUrl,
}: MediaTypeProps) => {
  if (!activeMedia) return null;

  return (
    <>
      {ytType === "video" && (
        <Box className="absolute right-64 top-16 z-50 w-[220px] overflow-hidden rounded-xl bg-black shadow-xl">
          <iframe
            className="h-[130px] w-full"
            src={getYoutubeEmbedUrl(
              activeMedia.url,
              activeMedia.start,
              activeMedia.end
            )}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          <Button
            onClick={() => {
              setActiveMedia(null);
              setYtType(null);
            }}
            className="w-full bg-zinc-900 py-2 text-xs text-white hover:bg-zinc-800"
          >
            Close
          </Button>
        </Box>
      )}

      {ytType === "audio" && (
        <Box className="absolute right-64 top-16 z-50 w-[220px] space-y-2 rounded-xl bg-white p-3 shadow-xl">
          <iframe
            className="h-[60px] w-full"
            src={getYoutubeEmbedUrl(
              activeMedia.url,
              activeMedia.start,
              activeMedia.end
            )}
            allow="autoplay"
          />

          <Button
            onClick={() => {
              setActiveMedia(null);
              setYtType(null);
            }}
            className="w-full rounded-md bg-zinc-900 py-2 text-xs text-white hover:bg-zinc-800"
          >
            Close
          </Button>
        </Box>
      )}
    </>
  );
};
