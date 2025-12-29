"use client";

import Image from "next/image";
import { GridBox } from "../../grid-box";
import { AudioPlayer } from "../../audio-player";
import { Box } from "../../box";
import { Title } from "../../typography";
import { InputField } from "../../form-fields";
import { useForm } from "react-hook-form";
import { GenericObjectType } from "@/types/shared-types";

export const HearPromptCard = ({
  title,
  imageSrc,
  soundSrc,
}: GenericObjectType) => {
  const { control } = useForm();
  return (
    <Box className="border-[20px] border-[#ffcb4c]">
      <GridBox className="grid-cols-1 border-[3px] border-black">
        <GridBox.GridItem className="p-3">
          <Box className="flex">
            <Box className="w-[280px] bg-[#FFD257] border-2 border-black flex flex-col items-center justify-between">
              <Box className="bg-white border-4 border-black rounded-full px-6 py-3 text-xl font-bold mt-4">
                HEAR
              </Box>
              <Box className="relative w-full h-[260px]">
                <Image
                  src={imageSrc}
                  alt="hear"
                  fill
                  className="object-contain"
                />
              </Box>
            </Box>

            <Box className="flex-1 flex flex-col justify-between p-8">
              <Title as="h2" className="text-3xl font-extrabold">
                {title}
              </Title>

              <InputField
                name="cover.title"
                control={control}
                label=""
                className="border-b-2 border-b-[black] border-solid focus-visible:outline-none shadow-none"
              />

              <Box className="flex justify-start">
                <AudioPlayer src={soundSrc} />
              </Box>
            </Box>
          </Box>
        </GridBox.GridItem>
      </GridBox>
    </Box>
  );
};
