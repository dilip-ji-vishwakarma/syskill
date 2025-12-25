"use client";
import { useState } from "react";

export const useDragMutation = <T extends { label: string; type: string }>() => {
  const [draggedItem, setDraggedItem] = useState<T | null>(null);
  const [bucketItems, setBucketItems] = useState<Record<string, T[]>>({});

  const handleDrop = (bucketType: string) => {
    if (!draggedItem || draggedItem.type !== bucketType) return;

    setBucketItems((prev) => ({
      ...prev,
      [bucketType]: [...(prev[bucketType] || []), draggedItem],
    }));
  };

  const isAlreadyDropped = (item: T) =>
    Object.values(bucketItems)
      .flat()
      .some((i) => i.label === item.label);

  return {
    draggedItem,
    setDraggedItem,
    bucketItems,
    handleDrop,
    isAlreadyDropped,
  };
};
