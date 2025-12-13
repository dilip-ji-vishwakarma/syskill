import {
  Minus,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MockDropdownItem = {
  title: string;
  href: string;
  label?: string;
  icon: LucideIcon;
};

export type MockMenuItem = {
  title: string;
  href: string;
  label?: string;
  icon: LucideIcon;
  dropdownItems?: MockDropdownItem[];
};

export const mockMenus: MockMenuItem[] = [
  {
    title: "CH-6 Algebraic Expressions",
    href: "/",
    icon: X,
  },
  {
    title: "User Management",
    href: "#",
    label: "",
    icon: Users,
    dropdownItems: [
      { title: "Users", href: "/inventory/users", label: "", icon: Minus },
      { title: "Roles", href: "/inventory/roles", label: "", icon: Minus },
      {
        title: "Sales Commission Agents",
        href: "/inventory/sales-commission-agents",
        label: "",
        icon: Minus,
      },
    ],
  },
];
