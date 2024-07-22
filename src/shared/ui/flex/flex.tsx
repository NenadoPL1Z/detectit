import { FlexProps } from "./types";
import styles from "./flex.module.css";
import { tags } from "./constants";
export const Flex = ({ tag = "div", vertical = true, gap, grow, align, justify, children }: FlexProps) => {
  const Tag = tags[tag];
  return (
    <Tag
      className={styles.container}
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
