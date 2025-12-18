"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SidebarState = {
  isCollapsed: boolean;
  setIsCollapsed: (v: boolean) => void;
  toggle: () => void;
};

const SidebarStateContext = createContext<SidebarState | undefined>(undefined);

export function SidebarStateProvider({
  children,
  initialCollapsed = false,
}: {
  children: ReactNode;
  initialCollapsed?: boolean;
}) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(initialCollapsed);

  const value: SidebarState = {
    isCollapsed,
    setIsCollapsed,
    toggle: () => setIsCollapsed((s) => !s),
  };

  return <SidebarStateContext.Provider value={value}>{children}</SidebarStateContext.Provider>;
}

export function useSidebarState() {
  const ctx = useContext(SidebarStateContext);
  if (!ctx) throw new Error("useSidebarState must be used within SidebarStateProvider");
  return ctx;
}
