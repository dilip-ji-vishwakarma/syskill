import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    isEditable: true,
    book: [
      {
        id: 1,
        isStart: true,
        isCover: true,
        image: "/images/cover.png",
        title: "Riya and Robo",
        description: null,
        video: {
          url: "https://youtu.be/cd1KiAOTlnI?si=U4QeV_eytw784TwS",
          start: 10,
          end: 40,
        },
        audio: {
          url: "https://youtu.be/cd1KiAOTlnI?si=U4QeV_eytw784TwS",
          start: 10,
          end: 40,
        },
      },
      {
        id: 2,
        isStart: false,
        isCover: false,
        image: "/images/gradient.png",
        title: "Riya and Robo",
        description: "Once upon a sunny morning...",
        video: {
          url: "https://youtu.be/cd1KiAOTlnI?si=U4QeV_eytw784TwS",
          start: 40,
          end: 80,
        },
        audio: {
          url: "https://youtu.be/cd1KiAOTlnI?si=U4QeV_eytw784TwS",
          start: 10,
          end: 40,
        },
      },
      {
        id: 3,
        isStart: false,
        isCover: false,
        image: "/images/page-1.png",
        title: "Riya and Robo",
        description:
          "Riya was walking happily through the garden. Birds were singing, butterflies were dancing, and the flowers were blooming in bright colors. By her side walked her new friend, Robo, a small robot with shiny eyes and a gentle smile.",
        video: {
          url: "https://youtu.be/cd1KiAOTlnI?si=U4QeV_eytw784TwS",
          start: 40,
          end: 80,
        },
        audio: {
          url: "https://youtu.be/cd1KiAOTlnI?si=U4QeV_eytw784TwS",
          start: 10,
          end: 40,
        },
      },
    ],
  };

  return NextResponse.json(data);
}