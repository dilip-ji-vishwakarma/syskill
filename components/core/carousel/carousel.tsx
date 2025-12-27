/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type SplideRef = {
  splide: any;
};

type CarouselProps = {
  slides: {
    id: string | number;
    content: React.ReactNode;
    thumb?: React.ReactNode;
  }[];
};

export function Carousel({ slides }: CarouselProps) {
  const mainRef = useRef<SplideRef>(null);
  const thumbsRef = useRef<SplideRef>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      const main = mainRef.current.splide;
      const thumbs = thumbsRef.current.splide;

      if (main && thumbs) {
        main.sync(thumbs);
      }
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <Splide
        ref={mainRef}
        options={{
          type: "fade",
          rewind: true,
          pagination: false,
          arrows: true,
          heightRatio: 0.6,
        }}
        aria-label="Main content"
        className="h-[500px]"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="w-full">
              {slide.content}
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        ref={thumbsRef}
        options={{
          fixedWidth: 120,
          fixedHeight: 80,
          gap: 12,
          rewind: true,
          pagination: false,
          isNavigation: true,
          arrows: false,
          focus: "center",
          breakpoints: {
            640: {
              fixedWidth: 90,
              fixedHeight: 60,
            },
          },
        }}
        aria-label="Thumbnails"
      >
        {slides.map((slide) => (
          <SplideSlide key={`thumb-${slide.id}`}>
            <div className="w-full cursor-pointer overflow-hidden rounded border hover:ring-2 ring-black transition">
              {slide.thumb ?? (
                <div className="flex items-center justify-center text-sm font-semibold bg-muted">
                  Slide {slide.id}
                </div>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
