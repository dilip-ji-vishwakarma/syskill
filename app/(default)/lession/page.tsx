import { Box } from "@/components/core";
import { Carousel } from "@/components/core/carousel";
import {
  BigQuestion,
  HearPromptCard,
  LessonHeader,
  MultiCard,
  MultiInputCard,
} from "@/components/core/lession";
import { MultiInputLabelCard } from "@/components/core/lession/multi-input-label-card";
import { SoundCard } from "@/components/core/lession/sound-card";
import Image from "next/image";

const Page = () => {
  const slides = [
    {
      id: 1,
      content: <LessonHeader />,
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/Human senses and machine sensors-Grade 1.jpg"}
        />
      ),
    },
    {
      id: 2,
      content: <BigQuestion />,
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/big-questions.jpg"}
        />
      ),
    },
    {
      id: 3,
      content: (
        <Image
          width={1920}
          height={1080}
          alt=""
          src={"/images/lession/what-do-you-see.jpg"}
          className="h-[480px]"
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/what-do-you-see.jpg"}
        />
      ),
    },
    {
      id: 4,
      content: (
        <Image
          width={1920}
          height={1080}
          alt=""
          src={"/images/lession/what-do-you-see-1.jpg"}
          className="h-[480px]"
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/what-do-you-see-1.jpg"}
        />
      ),
    },
    {
      id: 5,
      content: (
        <SoundCard
          title="How does it sound?"
          imageSrc="/images/lession/how-does-it-sound.jpg"
          soundSrc="/audio/harmonium.mp3"
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/how-does-it-sound.jpg"}
        />
      ),
    },
    {
      id: 6,
      content: (
        <HearPromptCard
          title="Tell me what you hear"
          imageSrc="/images/lession/boy.png"
          soundSrc="/audio/harmonium.mp3"
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/what-you-hear.jpg"}
        />
      ),
    },
    {
      id: 7,
      content: (
        <HearPromptCard
          bgColor="#FFFFFF"
          title="Which animal makes these sounds?"
          imageSrc="/images/lession/boy.png"
          soundSrc="/audio/farm-animals-5-fx-401406.mp3"
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/animal-sound.jpg"}
        />
      ),
    },
    {
      id: 8,
      content: (
        <HearPromptCard
          bgColor="#FFFFFF"
          title="Where do you hear this sound?"
          imageSrc="/images/lession/boy.png"
          soundSrc="/audio/farm-animals-5-fx-401406.mp3"
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/where-do-you-hear.jpg"}
        />
      ),
    },
    {
      id: 9,
      content: (
        <MultiInputCard
          bgColor="#009966"
          label="List 3 things you smelled:"
          title="Where do you hear this sound?"
          imageSrc="/images/lession/boy.png"
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/multi-input.jpg"}
        />
      ),
    },
    {
      id: 10,
      content: (
        <MultiInputLabelCard
          title="Identify Smells"
          heading="Smell"
          bgColor="#FFFFFF"
          label="Write the correct answers"
          imageSrc="/images/lession/boy.png"
          inputs={[
            {
              name: "smell.curry",
              label: "Curry",
            },
            {
              name: "smell.flower",
              label: "Flower",
            },
            {
              name: "smell.soap",
              label: "Soap",
            },
          ]}
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/smell-image.jpg"}
        />
      ),
    },
    {
      id: 11,
      content: (
        <MultiCard
          heading="How machines sense the world?"
          card={[
            {
              image: "/images/lession/camera.png",
              label: "Camera is like eyes",
            },
            {
              image: "/images/lession/mic.png",
              label: "Microphone is like ears",
            },
            {
              image: "/images/lession/tab.png",
              label: "Touch sensor is like skin",
            },
          ]}
        />
      ),
      thumb: (
        <Image
          width={140}
          height={140}
          alt=""
          src={"/images/lession/animal-sound.jpg"}
        />
      ),
    },
  ];
  return (
    <Box>
      <Carousel slides={slides} />
    </Box>
  );
};

export default Page;
