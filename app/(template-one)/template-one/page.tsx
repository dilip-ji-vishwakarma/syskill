"use client";

import { FlipBooks } from "@/components/core/flip-book/flip-book";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/flip-book");
        const data: FlipBookApiResponse = await res.json();

        setPages(data.book);
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
      <div className="flex h-[300px] items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return <div className="container m-auto"><FlipBooks pages={pages} /></div>;
};

export default Page;
