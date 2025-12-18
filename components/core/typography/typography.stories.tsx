import type { Meta } from "@storybook/react";
import { Title } from "./title";
import { Paragraph } from "./paragraph";
import { Caption } from "./caption";
import { Muted } from "./muted";

const meta: Meta = {
  title: "Design System/Typography",
  tags: ["autodocs"],
};

export default meta;

export const All = () => (
  <div className="space-y-4">
    <Title as="h1">Heading 1</Title>
    <Title as="h2">Heading 2</Title>
    <Paragraph>
      This is a paragraph following shadcn typography rules.
    </Paragraph>
    <Caption>Caption text</Caption>
    <Muted>Muted helper text</Muted>
  </div>
);
