import cx from "classnames";
import styles from "./Input.module.scss";
import { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  const { placeholder, value, onChange } = props;

  const isValue = value && value.length > 0;

  const mods = { [styles.active]: isValue };
  const inputMods = { [styles.inputActive]: isValue };

  return (
    <div className={styles.root}>
      <span className={cx(styles.span, mods)}>{placeholder}</span>
      <input
        className={cx(styles.input, inputMods)}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
