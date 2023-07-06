import { ChangeEvent } from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

interface InputProps {
  value?: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  const { placeholder, value, onChange } = props;

  const isValue = typeof value !== "undefined" && value.length > 0;

  const mods = { [styles.active]: isValue };

  return (
    <div className={cx(styles.root, mods)}>
      <span className={styles.span}>{placeholder}</span>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
