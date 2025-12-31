/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";

type PageItem = {
  description?: string;
};

export const useFlipBookMutation = (pages: PageItem[] = []) => {
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const [cornerLift, setCornerLift] = useState(false);

  const isCover = page === 0;

  const speak = () => {
    if (!pages?.length) return;

    const text = pages[page]?.description;
    if (!text) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;

    speechSynthesis.speak(utterance);
  };

  const nextPage = () => {
    setCornerLift(true);

    setTimeout(() => {
      bookRef.current?.pageFlip()?.flipNext();
    }, 120);

    setTimeout(() => {
      setCornerLift(false);
    }, 420);
  };

  const prevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  return {
    prevPage,
    nextPage,
    speak,
    bookRef,
    page,
    cornerLift,
    isCover,
    setPage,
  };
};
