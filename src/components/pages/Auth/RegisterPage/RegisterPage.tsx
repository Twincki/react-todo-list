import cx from "classnames";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";

import styles from "./RegisterPage.module.scss";

interface RegisterProps {
  className?: string;
}

export function RegisterPage(props: RegisterProps) {
  const { className } = props;
  return (
    <div className={cx(styles.root, className)}>
      <h2 className={styles.title}>Регистрация</h2>

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

      <div className={styles.register}>
        <span>Уже зарегистрированы?</span> <a href="/LoginPage">Регистрация</a>
      </div>
    </div>
  );
}
