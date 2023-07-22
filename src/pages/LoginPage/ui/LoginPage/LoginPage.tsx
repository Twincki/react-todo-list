import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { AuthWrapper } from 'shared/lib/components/AuthWrapper/AuthWrapper';
import { AuthLink } from 'shared/lib/components/AuthLink/AuthLink';
import { AppRoutes } from 'shared/lib/types/consts';

import {
  LoginValues,
  loginInitialValues,
  loginValidationSchema,
} from '../../model/formik/login';
import { loginByEmailAndPassword } from '../../model/services/loginByEmailAndPassword';

import styles from './LoginPage.module.scss';

interface LoginProps {
  className?: string;
}

export function LoginPage(props: LoginProps) {
  // Доступен в reactDom, позволяет переходить переходить по страницам
  const navigate = useNavigate();

  const { className } = props;

  const onSubmitForm = async (values: LoginValues) => {
    await loginByEmailAndPassword(values, formik);
    navigate(AppRoutes.APP);
  };

  const formik = useFormik({
    initialValues: loginInitialValues(),
    validationSchema: loginValidationSchema(),
    onSubmit: onSubmitForm,
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

      <Button fullWidth className={styles.button} type="submit">
        Войти
      </Button>

      <AuthLink
        additionalText="Не зарегистрированы?"
        to={AppRoutes.REGISTER}
        title="Регистрация"
      />
    </AuthWrapper>
  );
}
