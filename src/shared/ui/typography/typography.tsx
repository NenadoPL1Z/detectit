import { TypographyProps } from "./types";
import styles from "./typograpy.module.css";
import classnames from "classnames";

const cn = classnames.bind(styles);

export const Typography = ({ variant, color = "white", fontSize, lineHeight, children }: TypographyProps) => {
  return (
    <div
      className={cn(styles[variant], styles[color])}
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight ?? fontSize}px`,
      }}>
      {children}
    </div>
  );
};
