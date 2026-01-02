import { Box } from "../box";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Caption } from "../typography";

type ArrowsProps = {
  prevPage: () => void;
  nextPage: () => void;
  page: number;
  totalPages: number;
  isCover?: boolean;
};

export const Arrows = ({
  prevPage,
  nextPage,
  page,
  totalPages,
  isCover = false,
}: ArrowsProps) => {
  return (
    <Box className="flex items-center text-sm text-gray-600">
      <Button variant={"ghost"} onClick={prevPage} className="hover:text-black">
        <ChevronLeft size={18} />
      </Button>

      <Caption className="min-w-[80px] text-center font-medium">
        {isCover ? "Cover" : `${page} / ${totalPages}`}
      </Caption>

      <Button variant={"ghost"} onClick={nextPage} className="hover:text-black">
        <ChevronRight size={18} />
      </Button>
    </Box>
  );
};
