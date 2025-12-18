"use client";
import { ChevronDown, ChevronUp, User2 } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { sidebarItems } from "@/lib/mock-data/sidebar-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Caption, Paragraph } from "../typography";

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="text-muted space-y-4"
    >
      <SidebarHeader className="bg-primary-foreground border-b-2 dark:bg-muted/20 dark:text-muted">
        <div className="flex items-center gap-3 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-warning font-bold">
            S
          </div>
          {!isCollapsed && (
            <div className="flex flex-col leading-none">
              <Paragraph className="text-sm font-semibold tracking-tight text-white">
                SYSKILL
              </Paragraph>
              <Caption className="text-xs  text-muted dark:text-muted">
                Learning Platform
              </Caption>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-primary-foreground">
        <SidebarGroup className="space-y-3">
          <SidebarGroupLabel className="text-warning">
            Test Syllabus (Nov 29)
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;

                const isChildActive = item.children?.some(
                  (child) => child.url === pathname
                );
                if (item.children?.length) {
                  return (
                    <Collapsible
                      key={item.title}
                      defaultOpen={isChildActive}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild className="hover:bg-warning/60">
                          {/* <Tooltip>
                            <TooltipTrigger asChild> */}
                          <SidebarMenuButton>
                            {Icon && <Icon />}
                            {!isCollapsed && <span>{item.title}</span>}

                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 group-data-[collapsible=icon]:hidden" />
                          </SidebarMenuButton>
                          {/* </TooltipTrigger>
                            {isCollapsed && (
                              <TooltipContent side="right">
                                {item.title}
                              </TooltipContent>
                            )}
                          </Tooltip> */}
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((child) => {
                              const isActive = pathname === child.url;

                              return (
                                <SidebarMenuSubItem key={child.title}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={isActive}
                                  >
                                    <a href={child.url}>{child.title}</a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton
                          className="
    data-[active=true]:bg-warning
    data-[active=true]:text-muted
    hover:bg-warning/60
  "
                          asChild
                          isActive={pathname === item.url}
                        >
                          <a href={item.url}>
                            {Icon && <Icon />}
                            {!isCollapsed && <span>{item.title}</span>}
                          </a>
                        </SidebarMenuButton>
                      </TooltipTrigger>

                      {isCollapsed && (
                        <TooltipContent side="right">
                          {item.title}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-primary-foreground border-t-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
