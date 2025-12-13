import React from "react";

interface VisualCardProps {
  title?: string;
  children?: React.ReactNode;
}

export const VisualCard = ({ title = "Visualizing Terms", children }: VisualCardProps) => {
  return (
    <section className="mb-8">
      <div className="bg-white dark:bg-[#0B1220] rounded-[22px] border border-gemBorder shadow-sm overflow-hidden">
        <div className="h-12 flex items-center px-8 border-b border-gemBorder bg-[#f7f9ff]">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
            <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center">
              <div className="flex items-end gap-0.5">
                <span className="w-0.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span className="w-0.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span className="w-0.5 h-1.5 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            <span className="uppercase tracking-[0.18em] text-[11px]">
              {title}
            </span>
          </div>
        </div>
        <div className="px-10 pt-9 bg-white dark:bg-[#0B1220]">
          {children}
        </div>
      </div>
    </section>
  );
};
