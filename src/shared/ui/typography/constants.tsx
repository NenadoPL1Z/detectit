import { DetailedHTMLProps, HTMLAttributes } from "react";

export const tags = {
  b700: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <h1 {...props}></h1>,
  b400: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <h2 {...props}></h2>,
  m700: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <h3 {...props}></h3>,
  m500: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <p {...props}></p>,
  m400: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <p {...props}></p>,
  span: (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <span {...props}></span>,
};
