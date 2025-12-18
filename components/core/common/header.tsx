import { ArrowLeft, ArrowRight } from "lucide-react";
import { Theme } from "../theme";

type Props = {
  setIsCollapsed: (isCollapsed: boolean) => void;
  isCollapsed: boolean;
};

export default function Header({ setIsCollapsed, isCollapsed }: Props) {
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="flex h-12 items-center justify-between border-b border-gray-200 px-3">
      <button
        onClick={handleToggle}
        aria-label={isCollapsed ? "Open sidebar" : "Close sidebar"}
        className="
          group flex h-9 w-9 items-center justify-center
          rounded-md border border-gray-300
          transition-all duration-200
        "
      >
        <span
          className="
            transition-transform duration-300 ease-in-out
            
          "
        >
          {isCollapsed ? (
            <ArrowRight className="h-5 w-5 text-gray-700 dark:text-slate-50" />
          ) : (
            <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-slate-50" />
          )}
        </span>
      </button>

      <Theme />
    </div>
    </>
  );
}
