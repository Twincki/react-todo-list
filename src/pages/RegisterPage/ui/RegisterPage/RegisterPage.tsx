import cx from 'classnames';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { AuthWrapper } from 'shared/lib/components/AuthWrapper/AuthWrapper';
import { AppRoutes } from 'shared/lib/types/consts';
import { AuthLink } from 'shared/lib/components/AuthLink/AuthLink';

import {
  RegisterValues,
  registerInitialValues,
  registerValidationSchema,
} from '../../model/formik/register';

import styles from './RegisterPage.module.scss';
import { registerByEmailAndPassword } from 'pages/RegisterPage/model/service/registerByEmailAndPassword';

interface RegisterProps {
  className?: string;
}

export function RegisterPage(props: RegisterProps) {
  // Доступен в reactDom, позволяет переходить переходить по страницам
  const navigate = useNavigate();

  const { className } = props;

  const onSubmitFormRegister = async (values: RegisterValues) => {
    await registerByEmailAndPassword(values, formik);
    navigate(AppRoutes.APP);
  };

  const formik = useFormik({
    initialValues: registerInitialValues(),
    validationSchema: registerValidationSchema(),
    onSubmit: onSubmitFormRegister,
  });

  return (
    <AuthWrapper
      className={cx(styles.root, className)}
      title="Регистрация"
      onSubmit={formik.handleSubmit}
    >
      <Input
        placeholder="Адрес электронной почты"
        name="email"
        className={styles.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email as string}
      />
      <Input
        placeholder="Пароль"
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
        Регистрация
      </Button>

      <AuthLink
        additionalText="Уже зарегистрированы?"
        to={AppRoutes.LOGIN}
        title="Войти"
      />
    </AuthWrapper>
  );
}
