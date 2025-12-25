"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useDragMutation } from "./hook/use-drag-mutation";
import { Paragraph, Title } from "../../typography";

type DragItem = {
  label: string;
  type: string;
};

type DragBucket = {
  title: string;
  accept: string;
};

type DragSortGameProps = {
  title: string;
  description?: string;
  items: DragItem[];
  buckets: DragBucket[];
};

export const DragSortGame = ({
  title,
  description,
  items,
  buckets,
}: DragSortGameProps) => {

  const {
    setDraggedItem,
    bucketItems,
    handleDrop,
    isAlreadyDropped,
  } = useDragMutation<DragItem>();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Title as="h2" className="font-semibold">{title}</Title>
        {description && (
          <Paragraph className="text-muted-foreground">{description}</Paragraph>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <Badge
            key={item.label}
            draggable={!isAlreadyDropped(item)}
            onDragStart={() => setDraggedItem(item)}
            className={cn(
              "cursor-grab px-4 py-2 text-sm",
              isAlreadyDropped(item) && "opacity-40 cursor-not-allowed"
            )}
          >
            {item.label}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {buckets.map((bucket) => (
          <Card
            key={bucket.accept}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(bucket.accept)}
            className="min-h-[180px] border-dashed border-2 p-4"
          >
            <Title as="h3" className="text-center font-medium mb-4">
              {bucket.title}
            </Title>

            <div className="flex flex-wrap gap-2 justify-center">
              {(bucketItems[bucket.accept] || []).map((item) => (
                <Badge key={item.label} variant="secondary" className="dark:bg-secondary-foreground dark:text-secondary">
                  {item.label}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
