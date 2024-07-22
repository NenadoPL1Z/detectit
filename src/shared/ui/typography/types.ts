import { ReactNode } from "react";

export type TypographyProps = {
  variant: "b700" | "b400" | "m700" | "m500" | "m400";
  color?: "black" | "white" | "gray";
  fontSize: number;
  lineHeight?: number;
  children: ReactNode;
};
