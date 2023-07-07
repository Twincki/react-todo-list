import { ReactNode } from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

type ButonSizes = "small" | "medium";
type ButtonBgColor = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: ButonSizes;
  fullWidth?: boolean;
  bgColor?: ButtonBgColor;
}

export function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    size = "medium",
    fullWidth,
    bgColor = "primary",
  } = props;

  const mods = {
    [styles.fullWidth]: fullWidth,
  };

  const buttonColor = [styles[bgColor]];

  const additional = [styles[size]];

  return (
    <button
      onClick={onClick}
      className={cx(styles.root, mods, additional, buttonColor)}
    >
      {children}
    </button>
  );
}
