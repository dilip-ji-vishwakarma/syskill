import { Card } from "@/components/ui/card";
import { Title } from "../../typography";

export const BigQuestion = () => {
  return (
    <Card className="border-[20px] border-[#ffcb4c] rounded-none">
    <div className="p-8 bg-secondary-foreground text-center border-[3px] border-black ">
      <div className="curved-bottom m-auto">
        <Title
          as="h3"
          className=" font-bold h-20 flex items-center justify-center relative top-[60px]"
        >
          The Big Question 1
        </Title>
      </div>
      <Title as="h2" className="mt-10 font-semibold">
        How do humans sense the world and how do <br /> machines sense the world?
      </Title>
    </div>
    </Card>
  );
};
