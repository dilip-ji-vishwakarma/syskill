"use client";
import Image from "next/image";
import { Box } from "../../box";
import { GridBox } from "../../grid-box";
import { Paragraph, Title } from "../../typography";
import { List } from "../../list";
import { InputField } from "../../form-fields";
import { useForm } from "react-hook-form";

type InputItem = {
  name: string;
  label?: string;
  placeholder?: string;
};

type MultiInputCardProps = {
  title?: string;
  heading?: string;
  imageSrc?: string;
  label?: string;
  bgColor?: string;
  inputs: InputItem[];
};

export const MultiInputLabelCard = ({
  heading = "Smell",
  title = "Please Type Title",
  imageSrc = "/images/lession/boy.png",
  label,
  bgColor = "#FFD257",
  inputs,
}: MultiInputCardProps) => {
  const { control } = useForm();

  return (
    <Box className="border-[20px] border-[#ffcb4c]">
      <GridBox
        columns={12}
        tablet={12}
        laptop={12}
        desktop={12}
        className="border-[5px] border-solid border-[black]"
      >
        <GridBox.GridItem
          columnMerge={8}
          colMargeDesktop={8}
          colMargeLaptop={8}
          colMargeTablet={8}
          className="p-4"
        >
          <Box className="flex flex-col p-8 gap-8">
            <Box className="space-y-3">
              <Title as="h2" className="text-3xl font-extrabold">
                {title}
              </Title>

              {label && <Paragraph>{label}</Paragraph>}
            </Box>

            <Box>
              <List type="none" gap={8}>
                {inputs.map((item, index) => (
                  <List.Item
                    key={item.name || index}
                    className="w-full flex items-center gap-2.5"
                  >
                    <InputField
                      name={item.name}
                      label={item.label}
                      control={control}
                      placeholder={item.placeholder}
                      className="border-b-[black] border-b border-solid focus-visible:outline-none shadow-none w-full"
                    />
                  </List.Item>
                ))}
              </List>
            </Box>
          </Box>
        </GridBox.GridItem>
        <GridBox.GridItem
          columnMerge={4}
          colMargeDesktop={4}
          colMargeLaptop={4}
          colMargeTablet={4}
        >
          <Box
            className={` ${
              bgColor ? "" : "border-2 border-black"
            } flex flex-col items-center justify-between`}
            style={{ backgroundColor: bgColor }}
          >
            <Box className="bg-white border-4 border-black rounded-full px-6 py-3 text-xl font-bold mt-4 uppercase">
              {heading}
            </Box>

            <Box className="relative w-full h-[280px]">
              <Image
                src={imageSrc}
                alt={heading.toLowerCase()}
                fill
                className="object-contain"
              />
            </Box>
          </Box>
        </GridBox.GridItem>
      </GridBox>
    </Box>
  );
};
