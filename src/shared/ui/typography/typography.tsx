import { TypographyProps } from "./types";
import styles from "./typograpy.module.css";
import classnames from "classnames/bind";
import { tags } from "./constants";

const cn = classnames.bind(styles);

export const Typography = ({
  tag,
  className,
  variant,
  color = "white",
  fontSize,
  lineHeight,
  underline,
  centered,
  wrap,
  children,
}: TypographyProps) => {
  const Tag = tags[tag ?? variant];
  return (
    <Tag
      className={cn(styles[variant], styles[color], { underline, centered, wrap }, className)}
      style={{
        fontSize: fontSize ? `${fontSize}px` : "",
        lineHeight: lineHeight || fontSize ? `${lineHeight ?? fontSize}px` : "",
      }}>
      {children}
    </Tag>
  );
};
