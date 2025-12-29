/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@splidejs/react-splide" {
  import * as React from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onMounted?: (splide: any) => void;
  }

  export const Splide: React.ForwardRefExoticComponent<
    SplideProps & React.RefAttributes<any>
  >;

  export const SplideSlide: React.FC<{
    children?: React.ReactNode;
    className?: string;
  }>;
}
