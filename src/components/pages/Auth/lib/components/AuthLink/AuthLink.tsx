import cx from 'classnames';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../../shared/lib/consts';

import styles from './AuthLink.module.scss';

interface AuthLinkProps {
  className?: string;
  aditionalText: string;
  to: ROUTES;
  title: string;
}

export function AuthLink(props: AuthLinkProps) {
  const { className, aditionalText, title, to } = props;

  return (
    <div className={cx(styles.register, className)}>
      <span>{aditionalText}</span> <Link to={to}>{title}</Link>
    </div>
  )
}