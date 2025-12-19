"use client"

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { Theme } from "../theme"
import { cn } from "@/lib/utils"

export const TopBar = () => {
  const { state } = useSidebar()

  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-20 h-14 flex items-center justify-between bg-background border-b px-4 transition-all",
        "left-0", // mobile
        state === "expanded" && "md:left-64",
        state === "collapsed" && "md:left-[48px]" // 👈 icon sidebar width
      )}
    >
      <SidebarTrigger />
      <Theme />
    </div>
  )
}
