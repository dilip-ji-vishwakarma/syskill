"use client";

import { FlipBooks } from "@/components/core/flip-book/flip-book";
import { Loader, PencilLine } from "lucide-react";
import { useEffect, useState } from "react";
import { PageBase } from "./toolkit/page-base";

type PageItem = {
  id: number;
  isStart?: boolean;
  isCover?: boolean;
  image?: string;
  title?: string;
  description?: string;
  video?: {
    url: string;
    start?: number;
    end?: number;
  };
  audio?: {
    url: string;
    start?: number;
    end?: number;
  };
};

type FlipBookApiResponse = {
  isEditable: boolean;
  book: PageItem[];
};

const Page = () => {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editable, setEditable] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/flip-book");
        const data: FlipBookApiResponse = await res.json();
        setPages(data.book);
        setEditable(data.isEditable);
      } catch (err) {
        console.error("Failed to load flip book", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader className="h-6 w-6 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="relative">
      {editable && !isEditMode && (
      <div className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Story Editor
            </h1>
            <p className="text-xs text-gray-500">
              View & edit your interactive flip book
            </p>
          </div>

         
            <button
              onClick={() => setIsEditMode(true)}
              className="flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm text-white shadow hover:bg-indigo-700 transition"
            >
              <PencilLine size={16} />
              Edit
            </button>
         
        </div>
      </div>
 )}
      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        {isEditMode ? (
            <div className="p-6">
              <PageBase
                data={pages}
                onCancel={() => setIsEditMode(false)}
                onSave={(updated) => {
                  setPages(updated);
                  setIsEditMode(false);
                }}
              />
          </div>
        ) : (
            <FlipBooks pages={pages} />
        )}
      </div>
    </div>
  );
};

export default Page;
