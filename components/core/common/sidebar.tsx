"use client";
import { usePathname } from "next/navigation";
import { Nav } from "../sidebar-template";
import type { LucideIcon } from "lucide-react";
import { MockDropdownItem, MockMenuItem, mockMenus } from "@/lib/mock-data/mock-menus";

type Variant = "default" | "ghost";

type NavDropdownItem = {
  title: string;
  href: string;
  label?: string;
  icon: LucideIcon;
  variant: Variant;
};

type NavLink = {
  title: string;
  href: string;
  label?: string;
  icon: LucideIcon;
  variant: Variant;
  dropdownItems?: NavDropdownItem[];
};

type SidebarProps = {
  isCollapsed: boolean;
};

function isActiveForPath(pathname: string, href?: string) {
  if (!href || href === "#") return false;
  if (href === pathname) return true;
  const [hrefPath] = href.split("?");
  if (hrefPath === pathname) return true;
  if (pathname.startsWith(hrefPath + "/")) return true;
  return false;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const pathname = usePathname() || "/";

  const links: NavLink[] = mockMenus.map((item: MockMenuItem) => {
    const hasDropdown = Array.isArray(item.dropdownItems) && item.dropdownItems.length > 0;

    const active = isActiveForPath(pathname, item.href) ||
      (hasDropdown && item.dropdownItems!.some((d) => isActiveForPath(pathname, d.href)));

    const mapped: NavLink = {
      title: item.title,
      href: item.href,
      label: item.label,
      icon: item.icon,
      variant: (active ? "default" : "ghost") as Variant,
      dropdownItems: item.dropdownItems
        ? item.dropdownItems.map((d: MockDropdownItem) => ({
            title: d.title,
            href: d.href,
            label: d.label,
            icon: d.icon,
            variant: (isActiveForPath(pathname, d.href) ? "default" : "ghost") as Variant,
          }))
        : undefined,
    };

    return mapped;
  });

  return <Nav isCollapsed={isCollapsed} links={links} />;
};

export default Sidebar;
