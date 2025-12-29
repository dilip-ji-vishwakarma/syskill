"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Title } from "../../typography";
import { Box } from "../../box";
import { AudioPlayer } from "../../audio-player";

type SoundCardProps = {
  title: string;
  imageSrc: string;
  soundSrc: string;
};

export const SoundCard = ({
  title,
  imageSrc,
  soundSrc,
}: SoundCardProps) => {

  return (
    <Box className="border-[#ffcb4c] border-[20px]">
      <Card
        className="border-4 border-black rounded-none h-[440px] bg-cover bg-center"
        style={{
          backgroundImage: `url("${imageSrc}")`,
        }}
      >
        <CardContent className="p-6 relative">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <Box className="w-[150px] text-center h-[100px] flex items-center justify-center">
              <Title as="h3">{title}</Title>
            </Box>

            <Box className="flex justify-end items-center">
              <AudioPlayer src={soundSrc} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
