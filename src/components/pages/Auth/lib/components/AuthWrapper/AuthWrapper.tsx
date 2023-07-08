import cx from 'classnames';

import styles from './AuthWrapper.module.scss';
import { ReactNode } from 'react';

interface AuthWrapperProps {
  className?: string;
  children: ReactNode;
  title: string;
}

export function AuthWrapper(props: AuthWrapperProps) {
  const { className, title, children } = props;

  return (
    <div className={cx(styles.root, className)}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.children}>
        {children}
      </div>
    </div>
  )
}