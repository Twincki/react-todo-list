import { $api } from 'shared/api/api';
import { RegisterValues } from '../formik/register';
import { saveCookie } from 'shared/cookies/cookies';
import { USER_LOGGED } from 'shared/lib/types/consts';

export async function registerByEmailAndPassword(
  { email, password }: RegisterValues,
  formik: any
) {
  try {
    const { data } = await $api.post('/auth/register', {
      email,
      password,
    });
    saveCookie(USER_LOGGED, data.id);
  } catch (error) {
    const message = error.response.data.message;

    formik.setErrors({ email: message, password: message });
    throw new Error(message);
  }
}
