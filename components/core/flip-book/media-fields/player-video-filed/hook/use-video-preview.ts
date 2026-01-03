import { useMemo } from "react";
import { getYoutubeEmbedUrl } from "@/types/types";

type UseVideoPreviewProps = {
  url?: string;
  start?: number;
  end?: number;
};

export const useVideoPreview = ({
  url,
  start,
  end,
}: UseVideoPreviewProps) => {
  const embedUrl = useMemo(() => {
    if (!url) return "";
    return getYoutubeEmbedUrl(url, start, end);
  }, [url, start, end]);

  return { embedUrl };
};
