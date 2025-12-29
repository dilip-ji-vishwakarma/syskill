import { Card } from "@/components/ui/card";
import { Paragraph, Title } from "../../typography";
import Image from "next/image";

export const LessonHeader = () => {
  return (
    <Card className="border-[20px] border-[#ffcb4c] rounded-none">
      <div className="p-5 text-center bg-secondary-foreground border-[3px] border-black">
        <div className="bg-[#ffcb4c] border-[3px] border-black">
          <Title as="h1" className="tracking-wide text-secondary-foreground strokeme">
            HUMAN SENSES AND
            <br />
            MACHINE SENSORS
          </Title>
        </div>
        <Paragraph className="text-lg font-semibold">Grade 1</Paragraph>
        <Paragraph className="text-lg font-semibold [&:not(:first-child)]:mt-2">
          Session 1
        </Paragraph>
        <Image
          className="m-auto"
          alt="Human-senses-and-machine-sensors-Grade-1"
          src={"/images/lession/Human-senses-and-machine-sensors-Grade-1.png"}
          width={800}
          height={800}
        />
      </div>
    </Card>
  );
}
