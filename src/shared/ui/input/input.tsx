import { InputProps } from "./types";
import styles from "./input.module.css";
import classnames from "classnames/bind";

const cn = classnames.bind(styles);
export const Input = ({ className, ...props }: InputProps) => {
  return <input className={cn(styles.input, className)} {...props} />;
};
