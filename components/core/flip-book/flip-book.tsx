/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { useFlipBookMutation } from "./hook/use-flip-book-mutation";
import { pages } from "@/lib/mock-data/flip-page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const FlipBook = HTMLFlipBook as any;

export const FlipBooks = () => {
  const [ytType, setYtType] = useState<"video" | "audio" | null>(null);
  const [showAudio, setShowAudio] = useState(false);

  const {
    prevPage,
    nextPage,
    speak,
    bookRef,
    page,
    cornerLift,
    isCover,
    setPage,
  } = useFlipBookMutation();

  const YOUTUBE_VIDEO_ID = "cd1KiAOTlnI"; // replace later

  const getYoutubeEmbedUrl = (
    type: "audio" | "video",
    start = 10,
    end = 40
  ) => {
    return type === "audio"
      ? `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&start=${start}&end=${end}&controls=1&modestbranding=1`
      : `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&start=${start}&end=${end}&controls=1&modestbranding=1`;
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1100px] items-center justify-between px-4 py-4 md:flex hidden">
        <div className="items-center gap-3 text-sm text-gray-600 flex">
          <button onClick={prevPage} className="hover:text-black">
            <ChevronLeft size={18} />
          </button>

          <span className="min-w-[80px] text-center font-medium">
            {isCover ? "Cover" : `${page} / ${pages.length - 1}`}
          </span>

          <button onClick={nextPage} className="hover:text-black">
            <ChevronRight size={18} />
          </button>
        </div>

        {ytType && (
          <div className="absolute right-64 top-16 z-50 w-[180px] rounded-xl bg-black shadow-xl overflow-hidden">
            <iframe
              className="w-full h-[100px]"
              src={getYoutubeEmbedUrl(ytType)}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setYtType(null)}
              className="w-full bg-zinc-900 text-white text-xs py-2 hover:bg-zinc-800"
            >
              Close
            </button>
          </div>
        )}

        {showAudio && (
          <div className="absolute right-64 top-16 z-50 w-[200px] rounded-xl bg-white shadow-xl p-3 space-y-2">
            <audio
              src="/audio/story.mp3"
              controls
              autoPlay
              className="w-full"
            />

            <button
              onClick={() => setShowAudio(false)}
              className="w-full rounded-md bg-zinc-900 text-white text-xs py-2 hover:bg-zinc-800"
            >
              Close
            </button>
          </div>
        )}

        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-2 rounded-full
      bg-blue-100 px-4 py-2 text-sm
      text-blue-700 hover:bg-blue-200"
            >
              <Volume2 size={16} />
              Listen
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52 bg-white">
            <DropdownMenuItem
              onClick={() => {
                setShowAudio(false);
                speak();
              }}
            >
              🔊 Read Aloud
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => setYtType("video")}>
              ▶️ YouTube Video
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setShowAudio(true)}>
              🎧 Audio
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="block md:hidden px-4 pb-10 space-y-8 overflow-y-auto">
        {pages.map((p, i) => (
          <div key={i} className="rounded-xl bg-white overflow-hidden">
            <img
              src={p.image}
              alt=""
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5 font-serif text-gray-800">
              {p.isCover && (
                <h1 className="mb-3 text-2xl font-semibold">{p.title}</h1>
              )}

              {!p.isCover && <p className="story-text">{p.text}</p>}

              {!p.isCover && (
                <div className="mt-4 text-right text-xs text-gray-400">
                  Page {i}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="relative hidden md:flex justify-center overflow-hidden">
        <div className="pointer-events-none absolute right-[calc(50%-450px)] top-[12px] h-[300px] w-[14px]">
          <div className="absolute inset-0 rounded-r-xl bg-white shadow-md" />
          <div className="absolute right-[-4px] top-1 h-[350px] w-[6px] rounded-r-xl bg-gray-200" />
          <div className="absolute right-[-8px] top-2 h-[340px] w-[4px] rounded-r-xl bg-gray-300" />
        </div>

        <div
          className={`pointer-events-none absolute
            bottom-[12px] right-[calc(50%-450px)]
            h-20 w-20 rounded-bl-full
            transition-all duration-300 ease-out
            ${
              cornerLift
                ? "translate-x-[-14px] translate-y-[-14px] rotate-[-10deg]"
                : ""
            }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.22), transparent 60%)",
            filter: "blur(1px)",
          }}
        />

        <FlipBook
          ref={bookRef}
          width={900}
          height={380}
          useMouseEvents={false}
          onFlip={(e: any) => setPage(e.data)}
          className="rounded-xl shadow-2xl bg-white"
        >
          {pages.map((p, i) => (
            <div
              key={i}
              className="relative w-full h-full overflow-hidden rounded-xl bg-white"
            >
              {p.isCover ? (
                <div className="relative w-1/2 m-auto h-full">
                  <img
                    src={p.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 w-full bg-white/70 backdrop-blur-md py-6 text-center">
                    <h1 className="text-3xl font-serif font-semibold">
                      {p.title}
                    </h1>
                  </div>
                </div>
              ) : (
                <div className="flex w-full h-full">
                  <div className="w-1/2 h-full">
                    <img
                      src={p.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className="relative w-1/2 h-full px-12 py-10 story-text bg-cover bg-center shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]"
                    style={{
                      backgroundImage: "url('/images/page.png')",
                    }}
                  >
                    {p.text}

                    <span className="absolute bottom-4 right-6 text-sm text-gray-400">
                      {i}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </FlipBook>
      </div>
    </div>
  );
};
