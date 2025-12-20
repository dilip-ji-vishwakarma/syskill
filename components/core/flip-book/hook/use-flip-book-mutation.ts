/* eslint-disable @typescript-eslint/no-explicit-any */
import { pages } from "@/lib/mock-data/flip-page";
import { useRef, useState } from "react";

export const useFlipBookMutation = () => {
     const bookRef = useRef<any>(null);
      const [page, setPage] = useState(0);
      const [cornerLift, setCornerLift] = useState(false);
    
      const isCover = page === 0;
    
      const speak = () => {
        const text = pages[page]?.text;
        if (!text) return;
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.95;
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
      };
    
      const nextPage = () => {
        setCornerLift(true);
    
        setTimeout(() => {
          bookRef.current?.pageFlip().flipNext();
        }, 120);
    
        setTimeout(() => {
          setCornerLift(false);
        }, 420);
      };
    
      const prevPage = () => {
        bookRef.current?.pageFlip().flipPrev();
      };
  return {prevPage,nextPage,speak,bookRef,page,cornerLift,isCover,setPage};
}