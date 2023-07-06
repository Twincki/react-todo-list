import { ReactNode } from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

// TODO: Добавить цветовую схему
// primary #0074e4
// secondary #df3664

type ButonSizes = 'small' | "medium";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: ButonSizes;
  fullWidth?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, onClick, size = "medium", fullWidth } = props;

  const mods = {
    [styles.fullWidth]: fullWidth
  }

  const additional = [
    styles[size],
  ]

  return (
    <button onClick={onClick} className={cx(styles.root, mods, additional)}>
      {children}
    </button>
  );
}
