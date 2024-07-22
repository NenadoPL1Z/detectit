import { DetailedHTMLProps, HTMLAttributes } from "react";

export const tags = {
  div: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <div {...props}></div>,
  section: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <section {...props}></section>,
};
