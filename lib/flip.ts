export type Media = {
  url?: string;
  start?: number;
  end?: number;
};

export type PageItem = {
  id: number;
  isStart?: boolean;
  isCover?: boolean;
  image?: string;
  title?: string;
  description?: string;
  video?: Media;
  audio?: Media;
};

export type FlipBookApiResponse = {
  isEditable: boolean;
  book: PageItem[];
};
