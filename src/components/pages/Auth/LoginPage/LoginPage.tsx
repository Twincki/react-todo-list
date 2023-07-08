import cx from 'classnames';
import { Input } from '../../../Input/Input';
import { Button } from '../../../Button/Button';

import styles from './LoginPage.module.scss';

interface LoginProps {
  className?: string;
}

export function LoginPage(props: LoginProps) {
  const { className } = props;

  return (
    <div className={cx(styles.root, className)}>
      <h2 className={styles.title}>Аутентификация</h2>

      <Input placeholder='Адрес электронной почты' className={styles.email} />
      <Input placeholder='Пароль' type='password' className={styles.password} />

      <Button fullWidth className={styles.button}>Войти</Button>

      <div className={styles.register}>
        <span>Не зарегистрированы?</span>
        {" "}
        <a href="/register">Регистрация</a>
      </div>
    </div>
  )
}