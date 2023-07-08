import cx from "classnames";
import { Input } from "../../../Input/Input";
import { Button } from "../../../Button/Button";
import { AuthWrapper } from "../lib/components/AuthWrapper/AuthWrapper";
import { AuthLink } from "../lib/components/AuthLink/AuthLink";
import { ROUTES } from "../../../shared/lib/consts";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Неверный формат электронной почты")
        .required("Электронная почта обязательна"),
      password: Yup.string().max(40).required("Необходим пароль"),
    }),
  });

  function onSubmit(event: any) {
    event.preventDefault();
  }

  console.log(formik.errors, formik.values);

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
