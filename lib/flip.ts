export type MediaRange = {
  url: string;
  start: number;
  end: number;
};

export type FlipPage = {
  id: number;
  isStart?: boolean;
  isCover?: boolean;
  image: string;
  title: string;
  description?: string | null;
  video?: MediaRange;
  audio?: MediaRange;
};
