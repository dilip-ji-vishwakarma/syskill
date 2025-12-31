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