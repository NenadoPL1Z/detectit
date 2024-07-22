import { ReactNode } from "react";

type Variant = "b700" | "b400" | "m700" | "m500" | "m400";
type Tag = Variant | "span";

export type TypographyProps = {
  className?: string;
  tag?: Tag;
  variant: Variant;
  color?: "black" | "white" | "gray";
  fontSize: number;
  lineHeight?: number;
  underline?: boolean;
  centered?: boolean;
  children: ReactNode;
};
