import cx from "classnames";
import { Input } from "../../../Input/Input";
import { Button } from "../../../Button/Button";
import { AuthWrapper } from "../lib/components/AuthWrapper/AuthWrapper";
import { AuthLink } from "../lib/components/AuthLink/AuthLink";
import { ROUTES } from "../../../shared/lib/consts";

import styles from "./LoginPage.module.scss";

interface LoginProps {
  className?: string;
}

export function LoginPage(props: LoginProps) {
  const { className } = props;

  return (
    <AuthWrapper className={cx(styles.root, className)} title="Аутентификация">
      <Input placeholder="Адрес электронной почты" />
      <Input placeholder="Пароль" type="password" className={styles.password} />

      <Button fullWidth className={styles.button}>
        Войти
      </Button>

      <AuthLink
        additionalText="Не зарегистрированы?"
        to={ROUTES.REGISTER}
        title="Регистрация"
      />
    </AuthWrapper>
  );
}
