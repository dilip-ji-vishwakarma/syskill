import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ToolTip({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="hover:bg-[#E7E7E7]">
        {children}
      </TooltipTrigger>
      <TooltipContent side="bottom" className="bg-background dark:bg-warning text-secondary dark:text-secondary-foreground border border-secondary">
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
