import cx from "classnames";
import { Input } from "../../../Input/Input";
import { Button } from "../../../Button/Button";
import { AuthWrapper } from "../lib/components/AuthWrapper/AuthWrapper";
import { AuthLink } from "../lib/components/AuthLink/AuthLink";
import { ROUTES } from "../../../shared/lib/consts";
import { useFormik } from "formik";

import styles from "./LoginPage.module.scss";

interface LoginProps {
  className?: string;
}

export function LoginPage(props: LoginProps) {
  const { className } = props;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function onSubmit(event: any) {
    event.preventDefault();
  }
  return (
    <AuthWrapper
      onSubmit={onSubmit}
      className={cx(styles.root, className)}
      title="Аутентификация"
    >
      <Input
        name="email"
        placeholder="Адрес электронной почты"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        placeholder="Пароль"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        className={styles.password}
      />

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
