export const getYoutubeId = (url?: string) => {
  if (!url) return "";
  const match =
    url.match(/v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/);
  return match?.[1] ?? "";
};

export const getYoutubeEmbedUrl = (
  url: string,
  start = 0,
  end?: number
) => {
  const id = getYoutubeId(url);
  if (!id) return "";

  return `https://www.youtube.com/embed/${id}?autoplay=1&start=${start}${
    end ? `&end=${end}` : ""
  }&controls=1&modestbranding=1`;
};

export type Media = {
  url: string;
  start?: number;
  end?: number;
};

export type PageItem = {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  video?: Media;
  audio?: Media;
};

export type MediaForm = {
  id: string;
  title: string;
  description: string;
  image: File | null;
  videoUrl: string;
  videoStart?: number;
  videoEnd?: number;
  audioUrl: string;
  audioStart?: number;
  audioEnd?: number;
};

export type FormValues = {
  cover: MediaForm;
  pages: MediaForm[];
  end: MediaForm;
};
