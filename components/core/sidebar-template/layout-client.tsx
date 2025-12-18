"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Sidebar from "../common/sidebar";
import Header from "../common/header";
import { useSidebarState } from "./sidebar-state-provider";
import { ScrollArea } from "./scroll-area";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed, setIsCollapsed } = useSidebarState();

  return (
    <div className="flex h-screen w-screen md:overflow-hidden">
      <div
        className={cn(
          "h-screen border-r border-muted transition-all duration-300 ease-in-out bg-secondary overflow-hidden",
          isCollapsed ? "w-[80%] absolute z-40 left-0 top-0 shadow-lg" : "w-0",

          isCollapsed ? "md:w-0 md:static" : "md:w-64 md:static"
        )}
      >
        <Link href="/" className="h-24 flex items-center px-6 text-white">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-[12px] bg-primary flex items-center justify-center">
              <div className="h-5 w-4 rounded-[3px] border border-white/80 relative overflow-hidden">
                <div className="absolute inset-y-0 left-[45%] w-px bg-white/70"></div>
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-[16px] font-semibold">SYSKILL</div>
              <div className="text-[11px] text-slate-400 mt-[2px]">
                Grade 6-8 Syllabus
              </div>
            </div>
          </div>
        </Link>

        <ScrollArea className="h-[calc(100vh-48px)]">
          <Sidebar isCollapsed={isCollapsed} />
        </ScrollArea>
      </div>
      {isCollapsed && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/40 transition-opacity"
          onClick={() => setIsCollapsed(false)}
          aria-hidden="true"
        />
      )}
      <div className="flex-1 flex flex-col justify-start dark:bg-muted w-full max-w-full">
        <Header setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
        <ScrollArea className="w-full max-w-[980px] px-4 sm:px-8 lg:px-16 py-4 lg:py-10 md:m-auto dark:text-slate-100">
          <div>{children}</div>
        </ScrollArea>
      </div>
    </div>
  );
}
