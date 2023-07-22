import { $api } from 'shared/api/api';
import { RegisterValues } from '../formik/register';
import { saveCookie } from 'shared/cookies/cookies';

export async function registerByEmailAndPassword(
  { email, password }: RegisterValues,
  formik: any
) {
  try {
    const { data } = await $api.post('/auth/register', {
      email,
      password,
    });
    saveCookie('loginId', data.id);
  } catch (error) {
    const message = error.response.data.message;

    formik.setErrors({ email: message, password: message });
    throw new Error(message);
  }
}
