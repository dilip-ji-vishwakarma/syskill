/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, useWatch } from "react-hook-form";
import { InputField, TextareaField, InputFile } from "@/components/core";
import { PlayerAudioPreview } from "./player-audio-filed";
import { PlayerVideoPreview } from "./player-video-filed";

type Props = {
  prefix: string;
  control: Control<any>;
  imageLabel?: string;
  required?: boolean;
};

export const MediaFields = ({
  prefix,
  control,
  imageLabel,
  required,
}: Props) => {
  // 🔹 audio values
  const audioFile = useWatch({
    control,
    name: `${prefix}.audioFile`,
  });

  const audioStart = useWatch({
    control,
    name: `${prefix}.audioStart`,
  });

  const audioEnd = useWatch({
    control,
    name: `${prefix}.audioEnd`,
  });

  const videoUrl = useWatch({
    control,
    name: `${prefix}.videoUrl`,
  });

  const videoStart = useWatch({
    control,
    name: `${prefix}.videoStart`,
  });

  const videoEnd = useWatch({
    control,
    name: `${prefix}.videoEnd`,
  });

  return (
    <div className="space-y-4">
      <InputField
        name={`${prefix}.title`}
        control={control}
        label="Title"
      />

      <TextareaField
        name={`${prefix}.description`}
        label="Description"
        required
        control={control}
      />

      <InputFile
        name={`${prefix}.image`}
        label={imageLabel ?? "Image"}
        required={required}
        control={control}
      />

      {/* Video */}
      <div className="grid grid-cols-3 gap-3">
        <InputField
          name={`${prefix}.videoUrl`}
          control={control}
          label="Video URL"
        />
        <InputField
          name={`${prefix}.videoStart`}
          control={control}
          label="Start"
          type="number"
        />
        <InputField
          name={`${prefix}.videoEnd`}
          control={control}
          label="End"
          type="number"
        />
      </div>

      <PlayerVideoPreview
        url={videoUrl}
        start={
          videoStart !== undefined && videoStart !== ""
            ? Number(videoStart)
            : undefined
        }
        end={
          videoEnd !== undefined && videoEnd !== ""
            ? Number(videoEnd)
            : undefined
        }
      />
      

      {/* Audio Inputs */}
      <div className="grid grid-cols-3 gap-3">
        <InputFile
          name={`${prefix}.audioFile`}
          control={control}
          label="Audio File"
        />
        <InputField
          name={`${prefix}.audioStart`}
          control={control}
          label="Start"
          type="number"
        />
        <InputField
          name={`${prefix}.audioEnd`}
          control={control}
          label="End"
          type="number"
        />
      </div>
      <PlayerAudioPreview
        audioFile={audioFile}
        start={Number(audioStart) || 0}
        end={
          audioEnd !== undefined && audioEnd !== ""
            ? Number(audioEnd)
            : undefined
        }
      />
    </div>
  );
};
