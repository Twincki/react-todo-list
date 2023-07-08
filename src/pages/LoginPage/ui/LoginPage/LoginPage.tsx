import cx from "classnames";
import { Input } from "../../../../shared/ui/Input/Input";
import { Button } from "../../../../shared/ui/Button/Button";
import { AuthWrapper } from "../../../../shared/components/AuthWrapper/AuthWrapper";
import { AuthLink } from "../../../../shared/components/AuthLink/AuthLink";
import {
  loginInitialValues,
  loginValidationSchema,
} from "../../model/formik/login";
import { ROUTES } from "../../../../shared/types/consts";
import { useFormik } from "formik";

import styles from "./LoginPage.module.scss";

interface LoginProps {
  className?: string;
}

export function LoginPage(props: LoginProps) {
  const { className } = props;

  const formik = useFormik({
    initialValues: loginInitialValues(),
    validationSchema: loginValidationSchema(),
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AuthWrapper
      onSubmit={formik.handleSubmit}
      className={cx(styles.root, className)}
      title="Аутентификация"
    >
      <Input
        name="email"
        placeholder="Адрес электронной почты"
        error={formik.errors.email as string}
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        placeholder="Пароль"
        name="password"
        type="password"
        onChange={formik.handleChange}
        error={formik.errors.password as string}
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
