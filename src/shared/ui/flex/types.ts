import { CSSProperties, ReactNode } from "react";

type FlexProperties = {
  gap: number;
  vertical: boolean;
  grow: CSSProperties["flexGrow"];
  align: CSSProperties["alignItems"];
  justify: CSSProperties["justifyContent"];
};

export type FlexProps = Partial<FlexProperties> & {
  tag?: "div" | "section";
  children: ReactNode;
};
