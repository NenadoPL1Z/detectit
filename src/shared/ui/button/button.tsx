import { ButtonProps } from "./types";
import styles from "./button.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={cn(styles.button, className)} {...props} />;
};
