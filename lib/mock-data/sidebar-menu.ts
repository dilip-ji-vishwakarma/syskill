/* eslint-disable @typescript-eslint/no-explicit-any */
// sidebar-menu.ts
import {
  Home,
  Inbox,
  Calendar,
  Settings,
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
    title: "Inbox",
    icon: Inbox,
    children: [
      { title: "All Messages", url: "/inbox" },
      { title: "Unread", url: "/inbox/unread" },
    ],
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
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
