/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useHotspotMutation = ({feedbackText}:any) => {
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
      const [showChoices, setShowChoices] = useState(false);
      const [feedback, setFeedback] = useState("");
    
      const handleHotspotClick = (id: string) => {
        setActiveHotspot(id);
        setFeedback("");
        setShowChoices(true);
      };
    
      const handleAnswer = () => {
        if (!activeHotspot) return;
        setFeedback(feedbackText[activeHotspot]);
        setShowChoices(false);
      };
  return { activeHotspot, showChoices, feedback, handleHotspotClick, handleAnswer };
}
