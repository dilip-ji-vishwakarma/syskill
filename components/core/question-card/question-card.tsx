"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { Paragraph } from "../typography";

type Option = {
  id: string | number;
  label: React.ReactNode;
  isCorrect?: boolean;
};

type QuestionCardProps = {
  question: string;
  options: Option[];
  initialSelected?: string | number;
};

export function QuestionCard({
  question,
  options,
  initialSelected,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | number | null>(
    initialSelected ?? null
  );

  const handleSelect = (id: string | number) => {
    setSelected(id);
  };

  return (
    <section className="mb-10">
      <Card className="max-w-[720px] rounded-2xl">
        <CardContent className="px-8 py-6 space-y-5">
          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-sm font-semibold">
              ?
            </div>
            <Paragraph className="font-semibold [&:not(:first-child)]:mt-0">
              {question}
            </Paragraph>
          </div>

          {options.length === 0 ? (
            <Paragraph className="text-muted-foreground text-sm">
              No options available.
            </Paragraph>
          ) : (
            <div className="space-y-3">
              {options.map((opt) => {
                const isSelected = selected === opt.id;
                const isCorrect = Boolean(opt.isCorrect);

                return (
                  <Button
                    key={opt.id}
                    variant="outline"
                    onClick={() => handleSelect(opt.id)}
                    className={cn(
                      "w-full justify-between text-left h-auto px-4 py-3 text-sm",
                      isSelected &&
                        isCorrect &&
                        "border-success bg-green-50 text-success",
                      isSelected &&
                        !isCorrect &&
                        "border-danger bg-red-50 text-danger"
                    )}
                  >
                    <span>{opt.label}</span>

                    {isSelected && (
                      isCorrect ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <X className="h-4 w-4" />
                      )
                    )}
                  </Button>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
