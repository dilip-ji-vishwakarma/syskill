import type { Meta, StoryObj } from "@storybook/react";
import { AppSidebar } from "@/components/core/sidebar/app-sidebar";

import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const meta: Meta<typeof AppSidebar> = {
  title: "Layout/AppSidebar",
  component: AppSidebar,
  tags: ["autodocs"],

  // ✅ Next.js navigation mock (IMPORTANT)
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/dashboard", // active route
      },
    },
  },

  decorators: [
    (Story) => (
      <SidebarProvider defaultOpen>
        <div className="flex h-screen w-full">
          <Story />
          <main className="flex-1 p-6">
            <SidebarTrigger />
            <p className="mt-4 text-sm text-muted-foreground">
              Main content area
            </p>
          </main>
        </div>
      </SidebarProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AppSidebar>;

export const Expanded: Story = {
  name: "Expanded Sidebar",
};

export const Collapsed: Story = {
  name: "Collapsed Sidebar",
  decorators: [
    (Story) => (
      <SidebarProvider defaultOpen={false}>
        <div className="flex h-screen w-full">
          <Story />
          <main className="flex-1 p-6">
            <SidebarTrigger />
            <p className="mt-4 text-sm text-muted-foreground">
              Sidebar collapsed (hover icons to see tooltip)
            </p>
          </main>
        </div>
      </SidebarProvider>
    ),
  ],
};
