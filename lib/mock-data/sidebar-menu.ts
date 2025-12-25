/* eslint-disable @typescript-eslint/no-explicit-any */
// sidebar-menu.ts
import {
  Home,
  Inbox,
  Settings,
  NotebookPen,
  GamepadDirectional,
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
    title: "Game",
    url: "/game",
    icon: GamepadDirectional,
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
