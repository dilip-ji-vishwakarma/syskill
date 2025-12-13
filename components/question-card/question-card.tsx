/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

type Option = {
  id: string | number;
  label: React.ReactNode;
  isCorrect?: boolean;
};

type QuestionCardProps = {
  question?: unknown;
  options?: unknown;
  initialSelected?: unknown;
};

const safeText = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim().length > 0
    ? value
    : fallback;

const isRenderable = (node: React.ReactNode) =>
  node !== null && node !== undefined && node !== false;

const isValidOption = (opt: any): opt is Option =>
  opt &&
  (typeof opt.id === "string" || typeof opt.id === "number") &&
  isRenderable(opt.label);

export const QuestionCard = ({
  question,
  options,
  initialSelected,
}: QuestionCardProps) => {
  const safeQuestion = safeText(question, "No question provided");

  const safeOptions: Option[] = Array.isArray(options)
    ? options.filter(isValidOption)
    : [];

  const initial =
    safeOptions.find(o => o.id === initialSelected)?.id ?? null;

  const [selected, setSelected] = useState<string | number | null>(initial);

  const handleSelect = (id: string | number) => {
    setSelected(id);
  };

  // styles (same as before, logic unchanged)
  const incorrectClass =
    "rounded-lg px-4 py-3 text-[13px] text-[#b91c1c] bg-[#ffe4e4] border border-[#fecaca] flex items-center justify-between";
  const correctClass =
    "rounded-lg px-4 py-3 text-[13px] text-[#065f46] bg-[#ecfdf5] border border-[#bbf7d0] flex items-center justify-between";
  const neutralClass =
    "rounded-lg px-4 py-3 text-[13px] text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700";

  return (
    <section className="mb-10">
      <div className="bg-[#f1f4ff] dark:bg-[#0b1220] border border-[#dde4ff] dark:border-slate-700 rounded-[22px] shadow-sm max-w-[720px]">
        <div className="px-8 pt-6 pb-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-7 w-7 rounded-full bg-[#e0e7ff] dark:bg-[#1f2937] text-[#4f46e5] dark:text-indigo-300 flex items-center justify-center text-sm font-semibold">
              ?
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {safeQuestion}
            </p>
          </div>

          {safeOptions.length === 0 && (
            <div className="text-slate-500 dark:text-slate-400 text-sm">
              No options available.
            </div>
          )}

          <div className="space-y-3">
            {safeOptions.map((opt) => {
              const isSelected = selected === opt.id;
              const isCorrect = Boolean(opt.isCorrect);

              let className = neutralClass;
              if (isSelected) {
                className = isCorrect ? correctClass : incorrectClass;
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id)}
                  className={`${className} w-full text-left`}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <span className="text-base leading-none">
                      {isCorrect ? "✓" : "✕"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
