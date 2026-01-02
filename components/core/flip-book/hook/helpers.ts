import { v4 as uuid } from "uuid";
import { PageItem, MediaForm } from "@/types/types";

export const mapPageToForm = (page?: PageItem): MediaForm => ({
  id: page?.id ?? uuid(),
  title: page?.title ?? "",
  description: page?.description ?? "",
  image: null,
  videoUrl: page?.video?.url ?? "",
  videoStart: page?.video?.start,
  videoEnd: page?.video?.end,
  audioUrl: page?.audio?.url ?? "",
  audioStart: page?.audio?.start,
  audioEnd: page?.audio?.end,
});

export const buildPageFromForm = (form: MediaForm): PageItem => ({
  id: form.id,
  title: form.title,
  description: form.description,
  video: {
    url: form.videoUrl,
    start: form.videoStart,
    end: form.videoEnd,
  },
  audio: {
    url: form.audioUrl,
    start: form.audioStart,
    end: form.audioEnd,
  },
});
