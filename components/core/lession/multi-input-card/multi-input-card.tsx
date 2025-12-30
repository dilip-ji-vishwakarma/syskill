"use client"
import { Box } from "../../box";
import { GridBox } from "../../grid-box";
import Image from "next/image";
import { Paragraph, Title } from "../../typography";
import { InputField } from "../../form-fields";
import { useForm } from "react-hook-form";
import { List } from "../../list";

type MultiInputCardProps = {
  title: string;
  imageSrc: string;
  label?: string;
  bgColor?: string;
};

export const MultiInputCard = ({
  title,
  imageSrc,
  label,
  bgColor = "#FFD257",
}: MultiInputCardProps) => {
  const { control } = useForm();
  return (
    <Box className="border-[20px] border-[#ffcb4c]">
      <GridBox className="grid-cols-1 border-[3px] border-black">
        <GridBox.GridItem className="p-3">
          <Box className="flex">
            <Box
              className={`w-[280px] bg-[${bgColor}] border-2 ${
                bgColor ? "border-none" : "border-black"
              } flex flex-col items-center justify-between`}
            >
              <Box className="bg-white border-4 border-black rounded-full px-6 py-3 text-xl font-bold mt-4 uppercase">
                smell
              </Box>
              <Box className="relative w-full h-[260px]">
                <Image
                  src={imageSrc}
                  alt="smell"
                  fill
                  className="object-contain"
                />
              </Box>
            </Box>
              
            <Box className="flex-1 flex flex-col p-8 gap-8">
                <Box className="space-y-3">
              <Title as="h2" className="text-3xl font-extrabold">
                {title}
              </Title>
              {label && <Paragraph className="">{label}</Paragraph>}
              </Box>
              <Box>
              <List type="upper-roman" gap={8}>
                <List.Item>
                  <InputField
                    name="cover.title"
                    control={control}
                    label=""
                    className="border-b-2 border-b-[black] border-solid focus-visible:outline-none shadow-none"
                  />
                </List.Item>
                <List.Item>
                  <InputField
                    name="cover.title"
                    control={control}
                    label=""
                    className="border-b-2 border-b-[black] border-solid focus-visible:outline-none shadow-none"
                  />
                </List.Item>
                <List.Item>
                  <InputField
                    name="cover.title"
                    control={control}
                    label=""
                    className="border-b-2 border-b-[black] border-solid focus-visible:outline-none shadow-none"
                  />
                </List.Item>
              </List>
              </Box>
            </Box>
          </Box>
        </GridBox.GridItem>
      </GridBox>
    </Box>
  );
};
