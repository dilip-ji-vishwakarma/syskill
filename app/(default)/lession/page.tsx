import { Box } from '@/components/core';
import { Carousel } from '@/components/core/carousel'
import { BigQuestion, LessonHeader } from '@/components/core/lession'
import { SoundCard } from '@/components/core/lession/sound-card';
import Image from 'next/image';

const Page = () => {
    const slides = [
    {
      id: 1,
      content: <LessonHeader />,
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/Human senses and machine sensors-Grade 1.jpg"} />),
    },
    {
      id: 2,
      content: <BigQuestion />,
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/big-questions.jpg"} />),
    },
    {
      id: 3,
      content: (<Image width={1920} height={1080} alt='' src={"/images/lession/what-do-you-see.jpg"} className='h-[480px]' />),
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/what-do-you-see.jpg"} />),
    },
    {
      id: 4,
      content: (<Image width={1920} height={1080} alt='' src={"/images/lession/what-do-you-see-1.jpg"} className='h-[480px]' />),
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/what-do-you-see-1.jpg"} />),
    },
    {
      id: 5,
      content:  <SoundCard
        title="How does it sound?"
        imageSrc="/images/lession/how-does-it-sound.jpg"
        soundSrc="/audio/harmonium.mp3"
      />,
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/how-does-it-sound.jpg"} />),
    },
    {
      id: 6,
      content: <LessonHeader />,
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/Human senses and machine sensors-Grade 1.jpg"} />),
    },
    {
      id: 7,
      content: <LessonHeader />,
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/Human senses and machine sensors-Grade 1.jpg"} />),
    },
    {
      id: 8,
      content: <LessonHeader />,
      thumb: (<Image width={140} height={140} alt='' src={"/images/lession/Human senses and machine sensors-Grade 1.jpg"} />),
    },
  ];
  return (
    <Box>
      <Carousel slides={slides} />
    </Box>
  )
}

export default Page
