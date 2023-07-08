import cx from "classnames";

import styles from "./AuthWrapper.module.scss";
import { ReactNode } from "react";

interface AuthWrapperProps {
  className?: string;
  children: ReactNode;
  title: string;
  onSubmit?: (values?: any) => void;
}

export function AuthWrapper(props: AuthWrapperProps) {
  const { className, title, children, onSubmit } = props;

  return (
    <form onSubmit={onSubmit} className={cx(styles.root, className)}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.children}>{children}</div>
    </form>
  );
}
