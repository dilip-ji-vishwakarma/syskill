/* eslint-disable @typescript-eslint/no-explicit-any */
// sidebar-menu.ts
import {
  Home,
  Inbox,
  Settings,
  NotebookPen,
  GamepadDirectional,
  TableOfContents,
} from "lucide-react"

export type SidebarItem = {
  title: string
  url?: string
  icon?: any
  children?: {
    title: string
    url: string
  }[]
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Editor",
    icon: Inbox,
    children: [
      { title: "Tip Tap", url: "/editor/tip-tap" },
      { title: "Block Note", url: "/editor/block-note" },
    ],
  },
  {
    title: "Story",
    url: "/story",
    icon: NotebookPen,
  },
  {
    title: "Games",
    icon: GamepadDirectional,
    children: [
      { title: "Drag Short", url: "/games/drag-short" },
      { title: "Hot Spot Notice", url: "/games/hot-spot-notice" },
    ],
  },
  {
    title: "Lession",
    icon: TableOfContents,
    url: "/lession",
  },
  {
    title: "Settings",
    icon: Settings,
    children: [
      { title: "Profile", url: "/settings/profile" },
      { title: "Security", url: "/settings/security" },
    ],
  },
]
