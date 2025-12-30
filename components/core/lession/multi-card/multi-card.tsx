/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Box } from "../../box";
import { GridBox } from "../../grid-box";
import { Paragraph, Title } from "../../typography";

type CardProps = {
  label: string;
  image: string;
};

type MultiCardProps = {
  heading: string;
  card: CardProps[];
};

export const MultiCard = ({ heading, card }: MultiCardProps) => {
  return (
    <Box className="border-[20px] border-[#ffcb4c]">
      <Box className="border-[5px] border-solid border-[black] space-y-20 p-10">
        <Title as="h3" className="text-center">{heading}</Title>
        <GridBox columns={12} tablet={12} laptop={12} desktop={12}>
          {card.map((item: any, index: number) => (
            <GridBox.GridItem
              key={index}
              colMargeDesktop={4}
              colMargeLaptop={4}
              colMargeTablet={4}
              columnMerge={4}
              className="space-y-3"
            >
              <Image
                src={item.image}
                alt={item.label || "image"}
                width={200}
                height={200}
                className="text-center m-auto text-transparent w-[200px] h-[150px] object-contain"
              />
              <Paragraph className="text-center text-xl">{item.label}</Paragraph>
            </GridBox.GridItem>
          ))}
        </GridBox>
      </Box>
    </Box>
  );
};
