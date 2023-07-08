import cx from "classnames";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import { AuthWrapper } from "../lib/components/AuthWrapper/AuthWrapper";
import { ROUTES } from "../../../shared/lib/consts";
import { AuthLink } from "../lib/components/AuthLink/AuthLink";
import { registerInitialValues, registerValidationSchema } from "../lib/formik/register";
import { useFormik } from "formik";

import styles from "./RegisterPage.module.scss";

interface RegisterProps {
  className?: string;
}

export function RegisterPage(props: RegisterProps) {
  const { className } = props;

  const formik = useFormik({
    initialValues: registerInitialValues(),
    validationSchema: registerValidationSchema(),
    onSubmit: (values: any) => {
      console.log(values);
    }
  })

  return (
    <AuthWrapper className={cx(styles.root, className)} title="Регистрация" onSubmit={formik.handleSubmit}>
      <Input
        placeholder="Адрес электронной почты"
        name="email"
        className={styles.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email as string}
      />
      <Input placeholder="Пароль"
        type="password"
        className={styles.password}
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password as string}
      />
      <Input
        placeholder="Пароль (ещё раз)"
        type="password"
        name="repeatPassword"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatPassword as string}
        className={styles.repeatPassword}
      />

      <Button fullWidth className={styles.button}>
        Войти
      </Button>

      <AuthLink
        additionalText="Уже зарегистрированы?"
        to={ROUTES.LOGIN}
        title="Войти"
      />
    </AuthWrapper>
  );
}
