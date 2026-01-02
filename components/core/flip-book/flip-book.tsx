/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HTMLFlipBook from "react-pageflip";
import { useFlipBookMutation } from "./hook/use-flip-book-mutation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { getYoutubeEmbedUrl } from "@/types/types";
import { Arrows } from "./arrows";
import { Volume2 } from "lucide-react";
import { MediaType } from "./media-type";
import { Box } from "../box";
import { Caption, Title } from "../typography";
import { Button } from "@/components/ui/button";

const FlipBook = HTMLFlipBook as any;

type MediaProps = {
  url: string;
  start?: number;
  end?: number;
};

type PageItem = {
  id: string;
  isStart?: boolean;
  isCover?: boolean;
  image?: string;
  title?: string;
  description?: string;
  video?: MediaProps;
  audio?: MediaProps;
};

type FlipBooksProps = {
  pages: PageItem[];
};

export const FlipBooks = ({ pages }: FlipBooksProps) => {
  const [ytType, setYtType] = useState<"video" | "audio" | null>(null);

  const [activeMedia, setActiveMedia] = useState<{
    type: "video" | "audio";
    url: string;
    start?: number;
    end?: number;
  } | null>(null);

  const { prevPage, nextPage, speak, bookRef, page, isCover, setPage } =
    useFlipBookMutation(pages);

  const currentPage = pages[page] || pages[0];

  return (
    <>
      <Box className="mx-auto max-w-full items-center justify-between px-4 py-4 md:flex hidden">
        <Arrows
          isCover={isCover}
          prevPage={prevPage}
          nextPage={nextPage}
          page={page}
          totalPages={pages.length - 1}
        />
        <MediaType
          activeMedia={activeMedia}
          ytType={ytType}
          setActiveMedia={setActiveMedia}
          setYtType={setYtType}
          getYoutubeEmbedUrl={getYoutubeEmbedUrl}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700 hover:bg-blue-200">
              <Volume2 size={16} />
              Listen
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52 bg-white">
            <DropdownMenuItem onClick={() => speak()}>
              🔊 Read Aloud
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
                if (!currentPage?.video) return;
                setActiveMedia({
                  type: "video",
                  url: currentPage.video.url,
                  start: currentPage.video.start,
                  end: currentPage.video.end,
                });
                setYtType("video");
              }}
            >
              ▶️ YouTube Video
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => {
                if (!currentPage?.audio) return;
                setActiveMedia({
                  type: "audio",
                  url: currentPage.audio.url,
                  start: currentPage.audio.start,
                  end: currentPage.audio.end,
                });
                setYtType("audio");
              }}
            >
              🎧 Audio
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
      <Box className="block md:hidden px-4 pb-10 space-y-8 overflow-y-auto">
        {pages.map((p, i) => (
          <Box key={p.id} className="rounded-xl bg-white overflow-hidden">
            <img
              src={p.image}
              alt=""
              className="w-full h-[220px] object-cover"
            />

            <Box className="p-5 font-serif text-gray-800">
              {p.isCover && (
                <Title as="h3" className="mb-3 text-2xl font-semibold">{p.title}</Title>
              )}

              {!p.isCover && <p className="story-text">{p.description}</p>}

              {!p.isCover && (
                <Box className="mt-4 text-right text-xs text-gray-400">
                  Page {i}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Box className="relative hidden md:flex justify-center overflow-hidden">
        <FlipBook
          ref={bookRef}
          width={900}
          height={380}
          useMouseEvents={false}
          onFlip={(e: any) => setPage(e.data)}
          className="rounded-xl shadow-2xl bg-white"
        >
          {pages.map((p, i) => (
            <Box
              key={p.id}
              className="relative w-full h-full overflow-hidden rounded-xl bg-white"
            >
              {p.isCover ? (
                <Box className="relative w-1/2 m-auto h-full">
                  <img
                    src={p.image}
                    width={500}
                    height={500}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <Box className="absolute bottom-0 w-full bg-white/70 backdrop-blur-md py-6 text-center">
                    <Title as="h3" className="text-3xl font-serif font-semibold">
                      {p.title}
                    </Title>
                  </Box>
                </Box>
              ) : (
                <Box className="flex w-full h-full">
                  <Box className="w-1/2 h-full">
                    <img
                      src={p.image}
                      width={500}
                      height={500}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Box>

                  <Box
                    className="relative w-1/2 h-full px-12 py-10 story-text bg-cover bg-center shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]"
                    style={{
                      backgroundImage: "url('/images/page.png')",
                    }}
                  >
                    {p.description}

                    <Caption className="absolute bottom-4 right-6 text-sm text-gray-400">
                      {i}
                    </Caption>
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </FlipBook>
      </Box>
    </>
  );
};
