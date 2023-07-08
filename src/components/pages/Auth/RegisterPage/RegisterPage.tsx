import cx from "classnames";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import { AuthWrapper } from "../lib/components/AuthWrapper/AuthWrapper";
import { ROUTES } from "../../../shared/lib/consts";
import { AuthLink } from "../lib/components/AuthLink/AuthLink";

import styles from "./RegisterPage.module.scss";

interface RegisterProps {
  className?: string;
}

export function RegisterPage(props: RegisterProps) {
  const { className } = props;

  return (
    <AuthWrapper className={cx(styles.root, className)} title="Регистрация">
      <Input placeholder="Адрес электронной почты" className={styles.email} />
      <Input placeholder="Пароль" type="password" className={styles.password} />
      <Input
        placeholder="Пароль (ещё раз)"
        type="password"
        className={styles.repeatPassword}
      />

      <Button fullWidth className={styles.button}>
        ВОЙТИ
      </Button>

      <AuthLink
        additionalText="Уже зарегистрированы?"
        to={ROUTES.LOGIN}
        title="Войти"
      />
    </AuthWrapper>
  );
}
