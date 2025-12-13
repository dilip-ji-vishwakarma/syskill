import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Theme } from "../theme";

type Props = {
  setIsCollapsed: (isCollapsed: boolean) => void;
  isCollapsed: boolean;
};

export default function Header({ setIsCollapsed, isCollapsed }: Props) {
  const handleToggle = () => setIsCollapsed(!isCollapsed);

  return (
    <header className="flex h-12 items-center justify-between px-3">
      
      {/* Toggle Button only on mobile */}
      <button
        onClick={handleToggle}
        className="flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10 
                 hover:bg-white/10 transition md:hidden"
      >
        {isCollapsed ? (
          <PanelLeftClose className="h-5 w-5" />
        ) : (
          <PanelLeftOpen className="h-5 w-5" />
        )}
      </button>

      <Theme />
    </header>
  );
}
