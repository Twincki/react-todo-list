import { ReactNode, ButtonHTMLAttributes } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

type ButtonSizes = "small" | "medium";
type ButtonColor = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSizes;
  fullWidth?: boolean;
  color?: ButtonColor;
  className?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    children,
    fullWidth,
    size = "medium",
    color = "primary",
    onClick,
    className,
    ...otherProps
  } = props;

  const mods = { [styles.fullWidth]: fullWidth };

  const additional = [styles[size], styles[color]];

  return (
    <button
      {...otherProps}
      onClick={onClick}
      className={cx(styles.root, mods, additional, className)}
    >
      {children}
    </button>
  );
}
