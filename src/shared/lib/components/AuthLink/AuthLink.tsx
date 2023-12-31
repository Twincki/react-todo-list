import cx from "classnames";
import { Link } from "react-router-dom";
import { AppRoutes } from "shared/lib/types/consts";

import styles from "./AuthLink.module.scss";

interface AuthLinkProps {
  className?: string;
  additionalText: string;
  to: AppRoutes;
  title: string;
}

export function AuthLink(props: AuthLinkProps) {
  const { className, additionalText, title, to } = props;

  return (
    <div className={cx(styles.register, className)}>
      <span>{additionalText}</span> <Link to={to}>{title}</Link>
    </div>
  );
}
