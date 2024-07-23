import { FlexProps } from "./types";
import styles from "./flex.module.css";
import { tags } from "./constants";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);
export const Flex = ({ className, tag = "div", vertical = true, gap, grow, align, justify, children }: FlexProps) => {
  const Tag = tags[tag];
  return (
    <Tag
      className={cn(styles.container, className)}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexDirection: vertical ? "column" : "row",
        flexGrow: grow,
        gap,
      }}>
      {children}
    </Tag>
  );
};
