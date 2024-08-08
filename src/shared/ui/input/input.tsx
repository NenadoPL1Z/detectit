import { InputProps } from "./types";
import styles from "./input.module.css";
import classnames from "classnames/bind";
import Clear from "@shared/assets/icons/clear.svg?react";

const cn = classnames.bind(styles);
export const Input = ({ className, onClear, ...props }: InputProps) => {
  const { value } = props;
  return (
    <div className={cn(styles.container, className)}>
      <input className={cn(styles.input, { value })} {...props} />
      {value && (
        <button type="button" className={styles.button} onClick={() => onClear()}>
          <Clear className={styles.clear} />
        </button>
      )}
    </div>
  );
};
